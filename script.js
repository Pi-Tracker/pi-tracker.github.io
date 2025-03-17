const splashTexts = [
  "Now in Spanish!",
  "Made with real pixels!",
  "Also try Terraria!",
  "Powered by Pi Network",
  "Welcome to the Pi Tracker site!",
  "Keep calm and mine Pi.",
  "Your Pi is ready for you.",
  "Have you voted today?"
];

function getRandomSplashText() {
  const randomIndex = Math.floor(Math.random() * splashTexts.length);
  return splashTexts[randomIndex];
}

document.getElementById("splash-text").textContent = getRandomSplashText();