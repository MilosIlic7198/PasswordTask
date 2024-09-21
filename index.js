const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
  let pass;
  
  let nameArr = name.split("");
  let letter = nameArr[0];
  nameArr[0] = nameArr[1];
  nameArr[1] = letter;
  let newName = nameArr.join("");

  let rest = newName.slice(2);

  pass = newName + rest;

  let length = newName.length;

  pass = pass + length;

  console.log('Generated password: ', pass);
  
  rl.close();
});
