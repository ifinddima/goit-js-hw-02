function isLoginValid(login, min = 4, max = 16) {
  if (login.length >= min && login.length <= max) {
    return true;
  }
  return false;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  allLogins;
  login;
  console.log(allLogins);

  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = SUCCESS;
    } else {
      message = REFUSAL;
    }
  } else {
    message = ERROR;
  }
  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(isLoginValid(`Dima`, 3, 4));
// console.log(isLoginUnique(logins, `ss`));

console.log(addLogin(logins, 'Ajax'));
// ('Логин успешно добавлен!');

console.log(addLogin(logins, 'robotGoogles'));
// // ('Такой логин уже используется!');

console.log(addLogin(logins, 'Zod'));
// // ('Ошибка! Логин должен быть от 4 до 16 символов');

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// ('Ошибка! Логин должен быть от 4 до 16 символов');
