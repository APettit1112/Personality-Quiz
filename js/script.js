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
