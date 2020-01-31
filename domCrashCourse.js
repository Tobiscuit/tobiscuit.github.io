// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = '123';
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getElementById //
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText); // innerText pays attention to the styling! textContent does not!
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

// getElementsByClassName //

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
/* 
Gives error, since it's an HTML collection we must loop through it to apply the style change to all
items.style.backgroundColor = '#f4f4f4';
 */
// for (i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementsByTagName
// const li = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// querySelector

// const header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// const input = document.querySelector('input');
// input.value = 'Hello world!';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// querySelectorAll

// const titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// const odd = document.querySelectorAll('li:nth-child(odd)');
// const even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// Traversing the DOM //
const itemList = document.querySelector('#items');
// parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
const newDiv = document.createElement('div');

// Add class
newDiv.className = 'Hello';

// Add ID
newDiv.id = 'hello1';

// Add attribute
newDiv.setAttribute('title', 'Hello Div');

// Create Text Node
const newDivText = document.createTextNode('Hello World!');

// Add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);