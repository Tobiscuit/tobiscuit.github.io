const form = document.getElementById('user-input');

const signupHandler = event => {
  event.preventDefault();

  const userNameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');

  const enteredUsername = userNameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid Input - username must not be empty!');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('Invalid Password - password must six characters or longer!');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log(`Hi, I am ${user.userName}`);
};

form.addEventListener('submit', signupHandler);
