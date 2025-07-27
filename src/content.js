import { WaveFile } from "wavefile";

console.log("Extension content script loaded!");

async function webmToWav(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

  const wav = new WaveFile();
  wav.fromScratch(
    audioBuffer.numberOfChannels,
    audioBuffer.sampleRate,
    "32f",
    audioBuffer.getChannelData(0)
  );

  return new Blob([wav.toBuffer()], { type: "audio/wav" });
}
const video = document.querySelector("video");

if (video) {
  console.log("Video detected");
  const current_url = window.location.href;
  // Inject record button
  const button = document.createElement("button");
  button.textContent = "🎥";
  Object.assign(button.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 9999,
    padding: "10px",
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  });

  document.body.appendChild(button);
  button.addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
        selfBrowserSurface: "include",
      });
      const audioOnly = new MediaStream(stream.getAudioTracks()); // keep only audio

      const recorder = new MediaRecorder(audioOnly, { mimeType: "audio/webm" });
      // record as usual

      const chunks = [];
      stream.oninactive = () => {
        if (recorder.state === "recording") {
          stopButton.remove();
          button.style.display = "block"; // Show record button again
          recorder.stop();
        }
      };
      recorder.ondataavailable = (e) => chunks.push(e.data);
      recorder.onstop = async () => {
        if (stream.active) {
          stream.getTracks().forEach((t) => t.stop());
        }
        console.log("Recording stopped");
        const webm_blob = new Blob(chunks, { type: "audio/webm" });
        const blob = await webmToWav(webm_blob);
        button.style.display = "block"; // Show button again
        chrome.storage.local.get("gemini_api_key", (data) => {
          const key = data.gemini_api_key;
          if (key) {
            // You can now use this key to send fetch requests
            generateQuiz(blob, key)
              .then((quiz) => {
                console.log(quiz);
                openQuizWindow(quiz);
              })
              .catch((error) => {
                console.error("Error generating quiz:", error);
              });
          } else {
            window.alert(
              "No OpenAI API key found. Please set it in the extension popup."
            );
          }
        });
      };
      // create stop button
      button.style.display = "none"; // Hide button while recording
      const stopButton = document.createElement("button");
      stopButton.textContent = "⏹️";
      Object.assign(stopButton.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 9999,
        padding: "10px",
        backgroundColor: "#ff4757",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      });
      document.body.appendChild(stopButton);
      stopButton.addEventListener("click", () => {
        if (recorder.state === "recording") {
          recorder.stop();
          stopButton.remove();
          button.style.display = "block"; // Show record button again
        }
      });
      recorder.start();
      console.log("Recording started");
    } catch (err) {
      console.error("Error accessing screen/audio", err);
    }
  });
}

async function generateQuiz(audioBlob, apiKey) {
  const base64Audio = await blobToBase64(audioBlob);

  const body = {
    contents: [
      {
        parts: [
          {
            inline_data: {
              mime_type: "audio/wav", // adjust if using mp3 or other
              data: base64Audio,
            },
          },
          {
            text: "Generate a quiz based on the transcription of the audio. Format the quiz as a list of questions with multiple choice answers.",
          },
        ],
      },
    ],
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        type: "array",
        items: {
          type: "object",
          properties: {
            question: { type: "string" },
            options: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  text: { type: "string" },
                  letter: { type: "string" },
                },
              },
            },
            answer_letter: { type: "string" },
          },
          propertyOrdering: ["question", "options", "answer_letter"],
        },
      },
    },
  };

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey,
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    throw new Error("Gemini API error: " + response.statusText);
  }

  const data = await response.json();

  const rawJson = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawJson) {
    throw new Error("No quiz data returned");
  }

  let quiz;
  try {
    quiz = JSON.parse(rawJson);
  } catch (e) {
    console.error("Failed to parse JSON:", rawJson);
    throw new Error("Malformed quiz response");
  }

  return quiz;
}

async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result.split(",")[1];
      resolve(base64data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
function openQuizWindow(quizData) {
  const win = window.open(chrome.runtime.getURL("quiz.html"), "_blank");

  // Wait for the popup to load before sending message
  const sendQuiz = () => win.postMessage(quizData, "*");

  // Try sending message after window loads
  win.onload = sendQuiz;

  // Fallback if onload doesn't fire (sometimes happens with popup blockers)
  setTimeout(sendQuiz, 500);
}
