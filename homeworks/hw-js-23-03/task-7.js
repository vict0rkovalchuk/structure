"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

function addLogin(newLogin) {
  let arr = newLogin.split("");
  let length = arr.length;
  for (let item of logins) {
    if (item === newLogin) {
      return logins;
    }
  }
  if (length >= 4 && length <= 16) {
    logins.push(newLogin);
    return logins;
  }
  return logins;
}

console.log(addLogin("Ajax"));

{
  function isLoginValid(login) {
    let arr = login.split("");
    let length = arr.length;
    if (length >= 4 && length <= 16) {
      return true;
    }
    return false;
  }

  const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

  const isLoginUnique = function (allLogins, login) {
    for (let item of allLogins) {
      if (item === login) {
        return false;
      }
    }
    return true;
  };

  const addLogin = function (allLogins, login) {
    if (isLoginValid(login) == false) {
      return "Ошибка! Логин должен быть от 4 до 16 символов";
    } else if (isLoginValid(login) == true) {
      if (isLoginUnique(allLogins, login) == false) {
        return "Такой логин уже используется!";
      } else if (isLoginUnique(allLogins, login) == true) {
        logins.push(login);
        return "Логин успешно добавлен!";
      }
    }
  };

  console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
  console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
  console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
}
