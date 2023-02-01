// Программа, которая просит пользователя ввести имя и выводит приветствие,
// используя переданное имя, в консоль

function greeting(name) {
  console.log(`Привет, ${name}!`);
}

const username = prompt("Введите имя: ");
greeting(username);
