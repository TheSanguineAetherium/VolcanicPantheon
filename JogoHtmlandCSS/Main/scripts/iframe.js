const container = document.getElementById("iframe-container");

function enterFullscreen() {
  if (!document.fullscreenElement) {
    if (container.requestFullscreen) container.requestFullscreen();
    else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
    else if (container.msRequestFullscreen) container.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
  }
}