// Custom cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor hover effect
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
});

// Page transitions
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hostname === window.location.hostname) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const transition = document.querySelector('.page-transition');
            
            transition.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                window.location.href = href;
            }, 600);
        }
    });
});

// Stars animation for about page
if (document.body.classList.contains('dark-theme')) {
    createStars();
    createShootingStars();
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 200;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (mostly small, few larger ones)
        const size = Math.random() < 0.9 ? 
            Math.random() * 2 + 1 : 
            Math.random() * 3 + 2;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.5;
        
        // Occasional pink stars
        const color = Math.random() < 0.05 ? 
            'rgba(255, 192, 203, ' + opacity + ')' : 
            'rgba(255, 255, 255, ' + opacity + ')';
        
        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            animation: twinkle ${Math.random() * 4 + 2}s infinite ease-in-out;
        `;
        
        starsContainer.appendChild(star);
    }
}

function createShootingStars() {
    setInterval(() => {
        if (Math.random() < 0.3) { // 30% chance every interval
            const star = document.createElement('div');
            star.className = 'shooting-star';
            
            // Random starting position at the top
            const startX = Math.random() * 100;
            star.style.cssText = `
                left: ${startX}%;
                top: -5px;
                animation: shootingStar 2s linear forwards;
            `;
            
            document.querySelector('.stars-container').appendChild(star);
            
            // Remove the star after animation
            setTimeout(() => {
                star.remove();
            }, 2000);
        }
    }, 3000);
}

// Add this to your CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
    }
    
    @keyframes shootingStar {
        from {
            transform: translateY(0) translateX(0) rotate(45deg);
            opacity: 1;
        }
        to {
            transform: translateY(1000px) translateX(1000px) rotate(45deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Saturn rotation
document.addEventListener('DOMContentLoaded', () => {
    const saturn = document.getElementById('saturn');
    if (saturn) {
        saturn.addEventListener('click', () => {
            if (!saturn.classList.contains('rotating')) {
                saturn.classList.add('rotating');
                
                // Remove the rotating class after the animation completes
                setTimeout(() => {
                    saturn.classList.remove('rotating');
                }, 4000); // 4 seconds, matching the animation duration
            }
        });
    }
});

// Add sparkling stars to about page
function createStar() {
  if (document.querySelector('.about')) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.about').appendChild(star);
    
    setTimeout(() => {
      star.remove();
    }, 2000);
  }
}

// Create stars every 300ms if on about page
if (document.querySelector('.about')) {
  setInterval(createStar, 300);
} 