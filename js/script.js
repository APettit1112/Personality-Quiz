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