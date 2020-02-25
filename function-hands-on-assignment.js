const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hi hard-coded');
const sayHello4 = name => 'Hi ' + name;

sayHello('Tobias');
sayHello2('Tobias', 'Hello');
sayHello3();
console.log(sayHello4('Toby'));

const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name);

sayHello5('Tobiscuit');
sayHello5('Tobiscuit', 'Hiya');

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log('All not empty!');
  },
  'Hello',
  '12',
  'adsfa',
  'Not empty'
);
