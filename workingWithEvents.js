const buttons = document.querySelectorAll('button');

function btnClicked() {
  console.log('The button was clicked');
}

// button.onclick = function() {
//   console.log('Hello World');
// };

const buttonClickedHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

// const anotherButtonClickedHandler = () => {
//   console.log('This was clicked!');
// };

// button.onclick = buttonClickedHandler;
// button.onclick = anotherButtonClickedHandler;

const boundFn = buttonClickedHandler.bind(this);

// button.addEventListener('click', buttonClickedHandler);

// button.removeEventListener();
// setTimeout(() => {
//   button.removeEventListener('click', buttonClickedHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickedHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});
