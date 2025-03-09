function launchBalloons() {
  const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'];
  const numBalloons = 30;

  for (let i = 0; i < numBalloons; i++) {
    createBalloon(colors[Math.floor(Math.random() * colors.length)]);
  }
}

function createBalloon(color) {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.backgroundColor = color;

  // Randomize the spread direction and distance (decreasing the range)
  const angle = Math.random() * 2 * Math.PI;  // Angle in radians (0 to 2π)
  const distance = Math.random() * 50 + 50; // Decrease the spread range (50 to 100)

  // Calculate x and y based on angle and distance for CSS animation
  const xMove = Math.cos(angle) * distance + 'vw';
  const yMove = Math.sin(angle) * distance + 'vh';

  // Apply random x and y translation as CSS variables
  balloon.style.setProperty('--x-move', xMove);
  balloon.style.setProperty('--y-move', yMove);
  

  // Random animation duration for organic effect
  balloon.style.animationDuration = `${2 + Math.random() * 2}s`;

  document.body.appendChild(balloon);

  // Remove the balloon after animation ends
  balloon.addEventListener('animationend', () => {
    balloon.remove();
  },3000);
}


// Confetti Animation
function createConfetti() {
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Randomize confetti properties
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      
      document.body.appendChild(confetti);

      // Remove confetti element after animation ends
      confetti.addEventListener('animationend', () => {
          confetti.remove();
      });
  }
}
createConfetti(); 
  
function updateAgeTimer() {
  // Set birthdate here (Year, Month (0-11), Day)
  const birthDate = new Date(2000, 10, 23);

  function calculateAge() {
      const now = new Date();
      let ageInMilliseconds = now - birthDate;

      const seconds = Math.floor((ageInMilliseconds / 1000) % 60);
      const minutes = Math.floor((ageInMilliseconds / (1000 * 60)) % 60);
      const hours = Math.floor((ageInMilliseconds / (1000 * 60 * 60)) % 24);
      const days = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24)) % 30.44);
      const months = Math.floor((ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44)) % 12);
      const years = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));

      // Format the age string
      const ageString = `You are: ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds older`;

      // Display the age
      document.getElementById('age').textContent = ageString;
  }

  // Update the age every second
  setInterval(calculateAge, 1000);
}

// Call the function to start the timer
updateAgeTimer();


function toggleAudio() {
  const audio = document.getElementById('birthday-tune');
  const button = document.getElementById('audio-control-button');

  if (audio.paused) {
    audio.muted = false;
    audio.play();
    button.textContent = "Pause 🎶";
  } else {
    audio.pause();
    button.textContent = "Play 🎶";
  }
}

// Autoplay audio when it ends
const audio = document.getElementById('birthday-tune');
audio.addEventListener('ended', () => {
  audio.currentTime = 0; // Reset to the start
  audio.play();          // Play again
});


const names = ["Name1", "Name2", "Name3", "Name4","Name5"];
let nameIndex = 0;
let charIndex = 0;
const typingSpeed = 150; // Adjust speed of typing
const erasingSpeed = 100;
const delayBetweenNames = 2000; // Delay before switching names

function type() {
    const nameElement = document.getElementById("name");
    const currentName = names[nameIndex];

    if (charIndex < currentName.length) {
        nameElement.textContent += currentName.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenNames);
    }
}

function erase() {
    const nameElement = document.getElementById("name");
    if (charIndex > 0) {
        nameElement.textContent = nameElement.textContent.slice(0, -1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        nameIndex = (nameIndex + 1) % names.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
    type();
});

function flipCard(card) {
  card.querySelector('.card').classList.toggle('flipped');
}







