// Bronvermelding: Code gegenereerd met behulp van ChatGPT

// Selecteer elementen uit de HTML
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const wordElement = document.getElementById("word");
const optionsContainer = document.getElementById("options");

// Moeilijke Spaanse woorden en hun makkelijke vertalingen
const words = [
  {
    word: "Adefesio",
    correct: "Iets lelijks",
    options: ["Iets lelijks", "Iets moois", "Iets groots", "Iets kleins"],
  },
  {
    word: "Atisbo",
    correct: "Een glimp",
    options: ["Een glimp", "Een schaduw", "Een lichtstraal", "Een geluid"],
  },
  {
    word: "Bisoño",
    correct: "Een groentje",
    options: ["Een groentje", "Een expert", "Een leraar", "Een leider"],
  },
  {
    word: "Desazón",
    correct: "Ongemak",
    options: ["Ongemak", "Blijdschap", "Kalmte", "Energie"],
  },
  {
    word: "Estropicio",
    correct: "Chaos",
    options: ["Chaos", "Orde", "Stilte", "Vrede"],
  },
];

// Variabele voor de huidige vraag
let currentWordIndex = 0;

// Start de quiz
startButton.addEventListener("click", function () {
  startButton.style.display = "none"; // Verberg de startknop
  quizContainer.style.display = "block"; // Toon de quiz
  loadWord(); // Laad het eerste woord
});

// Laad een nieuw woord in de quiz
function loadWord() {
  // Controleer of er nog vragen over zijn
  if (currentWordIndex >= words.length) {
    quizContainer.innerHTML =
      "<h2>Gefeliciteerd! Je hebt alle woorden voltooid.</h2>";
    return;
  }

  // Haal het huidige woord op
  const currentWord = words[currentWordIndex];

  // Zet het woord in de HTML
  wordElement.textContent = currentWord.word;

  // Maak de opties aan
  optionsContainer.innerHTML = ""; // Leeg de oude opties
  currentWord.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-button");

    // Controleer of het de juiste optie is
    button.addEventListener("click", function () {
      if (option === currentWord.correct) {
        currentWordIndex++; // Ga naar het volgende woord
        loadWord(); // Laad het volgende woord
      } else {
        button.style.display = "none"; // Verwijder foute antwoorden
      }
    });

    optionsContainer.appendChild(button); // Voeg de knop toe
  });
}
