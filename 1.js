/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте 
      цикл while или do...while.
      
    - Делать проверку того, что пользователь ввел именно число, а не произвольный 
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего 
      снова пользователю предлагается ввести число в prompt.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/

let sum = 0;
let arr = [];
let userInput;

do {
  userInput = prompt("Введите число", "");

  console.log(userInput);
  if (userInput != null && true) {
    userInput = Number(userInput);
    if (userInput === Number(userInput)) {
      arr.push(userInput);
    } else {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
} while (userInput !== null);

for (let i = 0; i < arr.length; i += 1) {
  sum = sum + arr[i];
}

console.log(arr);
console.log(sum);
alert("Общая сумма чисел равна " + sum);

/*
  ***ЗАДАНИЕ ПОВЫШЕНОЙ СЛОЖНОСТИ - выполнять по желанию***
  
  Напишите скрипт авторизации пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords.
  При посещении страницы, необходимо попросить пользователя ввести свой пароль.  
  Необходимо проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего 3 раза (кол-во раз может изменяться).
  Подсказка: используйте цикл while, do...while или for.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  Если же пользователь нажмет Cancel, прекратить выполнение цикла.
*/

const passwords = ["qwerty", "1234", "batko", "max"];
let count = 3;
let log;
let hasLogin;


do {
  count -= 1;
  log = prompt("Введите пароль!", "");
  hasLogin = passwords.includes(log);
  console.log(hasLogin);
  console.log(count);
    if ((hasLogin == true)) {
        alert("Добро пожаловать!");
    }
    if (hasLogin !== true) {
        alert("Неверный пароль, у вас осталось " + count + " попыток");
    }
    if (count == 0 && hasLogin !== true) {
        alert("У вас закончились попытки, аккаунт заблокирован!");
    }

} while (count !== 0 && log !== null && hasLogin !== true);

