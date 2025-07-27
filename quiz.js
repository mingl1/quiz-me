window.addEventListener("message", (event) => {
  const quizData = event.data;
  if (!Array.isArray(quizData)) return;

  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // Clear "Loading..."

  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "question";
    div.innerHTML = `<p><strong>Q${index + 1}:</strong> ${q.question}</p>`;

    const feedback = document.createElement("div");
    feedback.className = "feedback";

    q.options.forEach((opt) => {
      const optDiv = document.createElement("div");
      optDiv.className = "option";
      optDiv.textContent = `${opt.letter}. ${opt.text}`;

      optDiv.onclick = () => {
        const isCorrect = opt.letter === q.answer_letter;
        feedback.textContent = isCorrect
          ? "✅ Correct!"
          : `❌ Wrong! Correct answer: ${q.answer_letter}`;
        optDiv.classList.add(isCorrect ? "correct" : "wrong");

        div.querySelectorAll(".option").forEach((el) => (el.onclick = null));
      };

      div.appendChild(optDiv);
    });

    div.appendChild(feedback);
    container.appendChild(div);
  });
});
