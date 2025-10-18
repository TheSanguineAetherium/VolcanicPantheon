    const colors = ["red", "orangered", "orange"];
  
    function createParticle() 
    {
      const particle = document.createElement("div");
      particle.classList.add("particle");
  
      // Random size (12–22px)
      const size = Math.random() * 10 + 12;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
  
      // Random position
      particle.style.left = Math.random() * 100 + "vw";
  
      // Random color
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
  
      // Random duration
      const duration = Math.random() * 3 + 5; // 5–8s
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
  
      // Flicker effect
      particle.style.opacity = 0.7 + Math.random() * 0.3;
  
      document.body.appendChild(particle);
  
      // Remove after animation
      setTimeout(() => particle.remove(), duration * 1000 + 2000);
    }
  
    function createBurst() 
    {
      const burst = document.createElement("div");
      burst.classList.add("burst");
  
      // Size (20–40px)
      const size = Math.random() * 20 + 20;
      burst.style.width = `${size}px`;
      burst.style.height = `${size}px`;
  
      // Random position
      burst.style.left = Math.random() * 100 + "vw";
  
      // Random duration (fast)
      const duration = Math.random() * 2 + 3; // 3–5s
      burst.style.animationDuration = `${duration}s`;
  
      document.body.appendChild(burst);
  
      // Remove after animation
      setTimeout(() => burst.remove(), duration * 1000 + 500);
    }
  
    // Regular particles every 0.25s
    setInterval(createParticle, 250);
  
    // Bursts occasionally (every 3s)
    setInterval(createBurst, 3000);