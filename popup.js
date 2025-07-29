document.getElementById("keyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const gem = document.getElementById("gemini").value;
  chrome.storage.local.set({ gemini_api_key: gem }, () => {
    document.getElementById("status").textContent = "✅ Key saved locally.";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("gemini_api_key", (data) => {
    const g = data.gemini_api_key;
    if (g) {
      document.getElementById("gemini").value =
        g.slice(0, 4) + "..." + g.slice(-4);
    }
  });
});
