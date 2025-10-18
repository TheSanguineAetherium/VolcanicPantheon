    const myVideo = document.getElementById('myVideo');
    const playButton = document.getElementById('playButton');
    myVideo.disableRemotePlayback = true;

    playButton.addEventListener('click', () => 
    {
      if (myVideo.paused) {
        myVideo.play();
        myVideo.style.display = 'block';
        playButton.style.display = 'none';
        if (myVideo.requestFullscreen) myVideo.requestFullscreen();
      } 

        else 
        {
          myVideo.pause();
        }
    });

function onFsChange() 
{
    const active = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
  if (!active) 
  {
    myVideo.pause();
    myVideo.style.display = 'none';
    playButton.style.display = 'block';
  }
}

document.addEventListener('fullscreenchange', onFsChange);
document.addEventListener('webkitfullscreenchange', onFsChange);
document.addEventListener('mozfullscreenchange', onFsChange);
document.addEventListener('MSFullscreenChange', onFsChange);