const splashTexts = [
  "Now in Spanish!",
  "Made with real pixels!",
  "Also try Terraria!",
  "Now partnered with The Pioneer Pages!",
  "Welcome to the Pi Tracker site!",
  "Keep calm and mine Pi.",
  "Your Pi is ready for you.",
  "Have you voted today?",
  "Mining Pi, one slice at a time.",
  "Crypto made easy!",
  "Pi is the new black.",
  "More than just a number!",
  "Pi Day is every day!",
  "Pi-ing since 2019.",
  "In Pi we trust.",
  "The future is decentralized!",
  "Now partnered with Piverse!"
];

function getRandomSplashText() {
  const randomIndex = Math.floor(Math.random() * splashTexts.length);
  return splashTexts[randomIndex];
}

document.getElementById("splash-text").textContent = getRandomSplashText();