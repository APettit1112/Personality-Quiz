console.log("script.js connected!");

const questionBlocks = document.querySelectorAll('.question-block');
const userAnswers = {};

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');

      userAnswers[index + 1] = button.dataset.element;
      console.log(userAnswers);
    });
  });
});


const showResultBtn = document.getElementById('show-result');

function displayResult() {
  const elementCounts = {
    Fire: 0,
    Water: 0,
    Earth: 0,
    Air: 0
  };
  for (let key in userAnswers) {
    const element = userAnswers[key];
    elementCounts[element]++;
  }

  console.log("Element counts:", elementCounts);

  let topElement = "";
  let maxCount = 0;

  for (let element in elementCounts) {
    if (elementCounts[element] > maxCount) {
      maxCount = elementCounts[element];
      topElement = element;
    }
  }

  const resultText = document.getElementById('result-text');
  const resultContainer = document.getElementById('result-container');
  
  let message = "";

  switch (topElement) {
    case "Fire":
      message = "You are Fire! Bold and Confident as ever.";
      break;
    case "Water":
      message = "You are Water! Calm and Nurturing.";
      break;
    case "Earth":
      message = "You are Earth! Grounded and stable.";
      break;
    case "Air":
      message = "You are Air! Creative and free-spirited.";
      break;
    default:
      message = "Please finish all the questions!";
  }

   resultText.textContent = message;
  resultContainer.style.display = "block";
}
showResultBtn.addEventListener('click', displayResult);
