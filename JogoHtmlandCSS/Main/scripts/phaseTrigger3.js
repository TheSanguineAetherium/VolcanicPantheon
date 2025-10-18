(function() {
    let buffer = "";
    const targetPhrase = "relax";
    const urlToOpen = "https://www.youtube.com/watch?v=WsCCYv2adkM";
  
    document.addEventListener("keydown", function(event) {
      if (event.key.length === 1) {
        buffer += event.key.toLowerCase();
  
        // Keep buffer length limited to phrase length
        if (buffer.length > targetPhrase.length) {
          buffer = buffer.slice(-targetPhrase.length);
        }
  
        if (buffer === targetPhrase) {
          window.open(urlToOpen, "_blank");
          buffer = ""; // reset after match
        }
      }
    });
  })();