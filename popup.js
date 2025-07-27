document.getElementById("keyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const key = document.getElementById("apiKey").value;
  const gem = document.getElementById("gemini").value;
  chrome.storage.local.set({ openai_api_key: key, gemini_api_key: gem }, () => {
    document.getElementById("status").textContent = "✅ Key saved locally.";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("openai_api_key", (data) => {
    const k = data.openai_api_key;
    if (k) {
      document.getElementById("apiKey").value =
        k.slice(0, 4) + "..." + k.slice(-4);
    }
  });
  chrome.storage.local.get("gemini_api_key", (data) => {
    const g = data.gemini_api_key;
    if (g) {
      document.getElementById("gemini").value =
        g.slice(0, 4) + "..." + g.slice(-4);
    }
  });
});
