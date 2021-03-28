"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user["mood"] = "happy"; // user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
let keys = Object.keys(user);
let values = Object.values(user);

function loopingArrays(arrKey, arrValue) {
  for (let i = 0; i < arrKey.length; i += 1) {
    console.log(`${arrKey[i]} : ${arrValue[i]}`);
  }
}

loopingArrays(keys, values);
