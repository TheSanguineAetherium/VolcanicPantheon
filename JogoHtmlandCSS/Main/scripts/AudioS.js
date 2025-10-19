// volcano-audio.js
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("audio").forEach((audio) => {
      audio.loop = true;
      audio.autoplay = true;
  
      const container = document.createElement("div");
      container.className = "volcano-player";
  
      const playButton = document.createElement("button");
      playButton.className = "volcano-play";
      playButton.innerHTML = "⏸️";
  
      const progress = document.createElement("div");
      progress.className = "volcano-progress";
  
      const filled = document.createElement("div");
      filled.className = "volcano-progress-filled";
      progress.appendChild(filled);
  
      const time = document.createElement("div");
      time.className = "volcano-time";
      time.textContent = "0:00";
  
      const volume = document.createElement("input");
      volume.type = "range";
      volume.className = "volcano-volume";
      volume.min = 0;
      volume.max = 1;
      volume.step = 0.01;
      volume.value = 0.5;
      audio.volume = 0.5;
  
      container.append(playButton, progress, time, volume);
      audio.style.display = "none";
      audio.parentNode.insertBefore(container, audio);
  
      // Play / pause
      playButton.addEventListener("click", () => {
        if (audio.paused) {
          audio.play();
          playButton.innerHTML = "⏸️";
        } else {
          audio.pause();
          playButton.innerHTML = "▶️";
        }
      });
  
      // Progress update
      audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
          const percent = (audio.currentTime / audio.duration) * 100;
          filled.style.width = `${percent}%`;
        }
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60)
          .toString()
          .padStart(2, "0");
        time.textContent = `${mins}:${secs}`;
      });
  
      // Click to seek
      progress.addEventListener("click", (e) => {
        const rect = progress.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
      });
  
      // Volume control + ember burst
      volume.addEventListener("input", () => {
        audio.volume = volume.value;
        for (let i = 0; i < 4; i++) {
          const ember = document.createElement("div");
          ember.className = "ember";
          ember.style.left = `${volume.offsetLeft + 30 + Math.random() * 20}px`;
          ember.style.top = `${volume.offsetTop - 10}px`;
          ember.style.animationDelay = `${Math.random() * 0.2}s`;
          ember.style.transform = `scale(${0.5 + Math.random()})`;
          container.appendChild(ember);
          setTimeout(() => ember.remove(), 1000);
        }
      });
    });
  });
  