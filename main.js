const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(event) {
  event.preventDefault();

  // Get input value
  const newItem = document.getElementById('item').value;

  // Create new li element
  const li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  const deleteBtn = document.createElement('button');

  // Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove Item
function removeItem(event) {
  if (event.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items
function filterItems(event) {
  // Convert to lowercase
  const text = event.target.value.toLowerCase();
  // Get list
  const items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
