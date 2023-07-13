
let input = document.getElementById('inp')
let number = document.querySelectorAll('.number')
let operator = document.querySelectorAll('#operator')
let result = document.getElementById('equal')
let clear = document.getElementById('clear')
let remove = document.getElementById('remove')
let resultDisplayed = false;

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];
    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷" || lastChar === "=" ) {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}


for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function (e) {

    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷" || lastChar === "=") {
      let newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {

      document.getElementById("error").innerHTML = hideEle(), viewEle();

      setTimeout(function hideEle() {
        error.style.display = 'none';
      }, 3000);
      function hideEle() {
        return document.getElementById("error").innerHTML = "Enter a number first";
      }
      function viewEle() {
        return error.style.display = 'block';
      }
    } else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}

result.addEventListener("click", function () {

  let inputString = input.innerHTML;
  let numbers = inputString.split(/\+|\-|\x|\÷/g);
  let operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  let divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  let multiply = operators.indexOf("x");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("x");
  }

  let subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  let add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  let modulo = operators.indexOf("%");
  while (modulo != -1) {
    numbers.splice(modulo, 2, numbers[modulo] % numbers[modulo + 1]);
    operators.splice(modulo, 1);
    modulo = operators.indexOf("%");
  }

  input.innerHTML = numbers[0];

  resultDisplayed = true;
});

// clearing the input on press of clear
clear.addEventListener("click", function () {
  input.innerHTML = "";
})


// remove the input on press of clear
remove.addEventListener("click", function () {
  input.innerHTML = input.innerHTML.slice(0, -1);;
})


document.getElementById('darkmode').onclick = function () {
  if (this.checked == true) {
    document.documentElement.style.setProperty("--bg", "#000");
    document.documentElement.style.setProperty("--white", "#0b0d4b");
    document.documentElement.style.setProperty("--text", "#fff");
    document.documentElement.style.setProperty("--lightgrey", "#0a0c3d");
    document.documentElement.style.setProperty("--main_container", "rgb(85, 85, 85)");
    document.documentElement.style.setProperty("--button1", "rgba(255, 98, 1, 0.451)");
    document.documentElement.style.setProperty("--button2", "rgba(214, 72, 72, 0.422)");
    document.documentElement.style.setProperty("--button3", "rgb(12, 15, 111)");
    document.documentElement.style.setProperty("--button4", "rgb(153, 63, 38)");
    document.documentElement.style.setProperty("--switcht1", "rgba(255,255,255,.6)");
    document.documentElement.style.setProperty("--switcht2", "rgba(0,0,0, .25)");
    document.documentElement.style.setProperty("--switcht3", "rgba(190, 189, 189, 0)");
    document.documentElement.style.setProperty("--switcht4", "rgba(0,0,0, .25)");
    document.documentElement.style.setProperty("--switchbg", "#965021");
  }
  else {
    document.documentElement.style.setProperty("--bg", "#fff");
    document.documentElement.style.setProperty("--white", "#fff");
    document.documentElement.style.setProperty("--text", "#000000");
    document.documentElement.style.setProperty("--lightgrey", "#fafafa");
    document.documentElement.style.setProperty("--main_container", "rgb(85, 85, 85)");
    document.documentElement.style.setProperty("--button1", "rgba(216, 216, 216, 0.893)");
    document.documentElement.style.setProperty("--button2", "rgba(180, 175, 175, 0.372)");
    document.documentElement.style.setProperty("--button3", "rgb(131, 126, 126)");
    document.documentElement.style.setProperty("--button4", "rgba(0, 0, 0, 0.608)");
    document.documentElement.style.setProperty("--switcht1", "rgba(255,255,255,.6)");
    document.documentElement.style.setProperty("--switcht2", "rgba(0,0,0, .25)");
    document.documentElement.style.setProperty("--switcht3", "rgba(190, 189, 189, 0)");
    document.documentElement.style.setProperty("--switcht4", "rgba(0,0,0,.25)");
    document.documentElement.style.setProperty("--switchbg", "#dfdfdf");
  }
};