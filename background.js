chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "VIDEO_PLAYING") {
    console.log("Background received: video is playing.");
    // You could show a badge, auto-activate popup, etc.
  }
});
