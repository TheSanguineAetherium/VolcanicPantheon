(function() {
    let buffer = "";
    const targetPhrase = "epping";
    const urlToOpen = "https://docs.google.com/document/u/0/";
  
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