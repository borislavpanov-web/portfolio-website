
      // -------------------------------------------------------
      //  Themes
      // -------------------------------------------------------
      //  Simple theme switcher.

      // 
      // -------------------------------------------------------

      // Set the theme (either light or dark, controlled by a bool `light` flag).
      const themeButton = document.getElementById('theme-button');
      function setTheme({ light = true }) {
        if (light) {
          document.body.setAttribute('data-theme', 'light');
          themeButton.innerText = '☽';
        } else {
          document.body.setAttribute('data-theme', 'dark');
          themeButton.innerText = '☼';
        }
      }

      // Toggle the theme when the user clicks the button.
      const THEME_STORAGE_KEY = 'cameronpriceaustin.com_theme';
      function toggleTheme() {
        const light = document.body.getAttribute('data-theme') !== 'light';
        setTheme({ light });

        // Remember.
        localStorage.setItem(THEME_STORAGE_KEY, document.body.getAttribute('data-theme'));
      }
      themeButton.onclick = toggleTheme;

      // Default to the user's theme, or their stored preference.
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      const defaultIsLight = !(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme({ light: stored ? stored === 'light' : defaultIsLight });

      // -------------------------------------------------------
      //  High five
      // -------------------------------------------------------
      //  Adapted from https://codepen.io/Balo/pen/yLLrjje
      // -------------------------------------------------------

      // Fire the glitter cannon upon high five.
      const highFiveButton = document.getElementById('high-five-button');
      highFiveButton.onclick = () => {
        fireGlitterCannon();
      };

      // The area the glitter will spread, bottom-centered on the middle of the hand.
      const GLITTER_AREA_WIDTH = 500;
      const GLITTER_AREA_HEIGHT = 500;

      // The number of particles to generate per firing.
      const NUM_PARTICLES = 80;

      // The particle colours (selected randomly).
      const PARTICLE_COLOURS = ['#ffca57', '#68b0f1', '#5fc383', '#ea86ae'];

      // Fire glitter when the user gives a high-five.
      function fireGlitterCannon() {
        // Fire from the center of the hand.
        const originX = highFiveButton.offsetLeft + highFiveButton.offsetWidth / 2.0;
        const originY = highFiveButton.offsetTop + highFiveButton.offsetWidth / 2.0;

        // Determine the dimensions, ensuring it doesn't exceed screen bounds.
        const width = Math.min(GLITTER_AREA_WIDTH, window.screen.width - 1);
        const bottom = window.scrollY + window.innerHeight;
        const height = Math.min(GLITTER_AREA_HEIGHT, (bottom - originY) * 2);

        // Create and position the canvas.
        let c = document.createElement('canvas');
        c.style.position = 'absolute';
        c.style.left = `${(originX - width / 2.0)}px`;
        c.style.top = `${(originY - height / 2.0)}px`;
        c.style.pointerEvents = 'none';
        c.style.width = `${width}px`;
        c.style.height = `${height}px`;
        c.style.zIndex = -1;

        // The actual canvas draw area is multiplied by the device pixel ratio.
        let ratio = window.devicePixelRatio;
        c.width = width * ratio;
        c.height = height * ratio;

        // Add it to the document.
        document.body.appendChild(c);

        // Generate the particles.
        let particles = [];
        for(let i = 0; i < NUM_PARTICLES; i++) {
          particles.push({
            x: c.width / 2.0,
            y: c.height / 2.0 + (Math.random() * 30 + 15),
            radius: rand(3, 8),
            color: PARTICLE_COLOURS[Math.floor(Math.random() * PARTICLE_COLOURS.length)],
            rotation: rand(0, 360, true),
            speed: rand(7, 14),
            friction: .99,
            fade: .3,
            opacity: rand(150, 150, true),
            yVel: 0,
            gravity: 0//0.06
          });
        }

        const ctx = c.getContext('2d');
        renderGlitterParticles(particles, c);
        setTimeout(() => document.body.removeChild(c), 5000);
      }

      // Render a frame of the particles.
      function renderGlitterParticles(particles, canvas) {
        if (document.body.contains(canvas)) {
          requestAnimationFrame(() => renderGlitterParticles(particles, canvas));
        }

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, i) => {
          p.x += p.speed * Math.cos(p.rotation * Math.PI / 180);
          p.y += p.speed * Math.sin(p.rotation * Math.PI / 180);

          p.opacity -= 0.005;
          p.speed *= p.friction;
          p.radius -= p.fade;
          p.yVel += p.gravity;
          p.y += p.yVel;

          if (p.opacity < 0 || p.radius < 0) return;

          ctx.beginPath();
          ctx.globalAlpha = p.opacity;
          ctx.fillStyle = p.color;
          ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, false);
          ctx.fill();
        });

        return ctx;
      }

      // Helper function to generate a random number in a range.
      function rand(a, b, c) {
        return parseFloat((Math.random() * ((a ? a : 1) - (b ? b : 0)) + (b ? b : 0)).toFixed(c ? c : 0));
      }
    