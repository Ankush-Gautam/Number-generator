const container = document.querySelector('#number-container');
const userInput = document.querySelector('#userInput');
const generateButton = document.querySelector('#submit');

generateButton.addEventListener('click', () => {

  //clearing content if previous value exists to avoid appending
  container.textContent = '';

  for (let i = 0; i <= userInput.value; i++) {
    const span = document.createElement('span');
    span.textContent = i;

    //checking for even or odd
    if (i % 2 == 0)
      span.style.backgroundColor = '#2ecc71';
    else
      span.style.backgroundColor = '#f1c40f';

    //checking for prime
    let repeatCount = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0)
        repeatCount++;
    }
    if (repeatCount === 1) //should be divisible by '1' only
      span.style.backgroundColor = '#e74c3c';

    container.appendChild(span);
  }
})