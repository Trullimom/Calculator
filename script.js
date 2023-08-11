//get values from buttons
//calculate numbers with operators
let result = "";
let calculation = "";
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    value = btn.innerHTML;

    switch (value) {
      case "1":
        calculation += "1";
        break;
      case "2":
        calculation += "2";
        break;
      case "3":
        calculation += "3";
        break;
      case "4":
        calculation += "4";
        break;
      case "5":
        calculation += "5";
        break;
      case "6":
        calculation += "6";
        break;
      case "7":
        calculation += "7";
        break;
      case "8":
        calculation += "8";
        break;
      case "9":
        calculation += "9";
        break;
      case "0":
        calculation += "0";
        break;
      case ".":
        calculation += ".";
        break;
      case "+":
        calculation += " + ";
        break;
      case "-":
        calculation += " - ";
        break;
      case "*":
        calculation += " * ";
        break;
      case "/":
        calculation += " / ";
        break;
      case "=":
        calculation = eval(calculation);
        break;
      case "C":
        calculation = "";
        break;
      case "(":
        calculation += "(";
        break;
      case ")":
        calculation += ")";
        break;
      case "Back":
        if (calculation.at(-1) !== " ") {
          newValue = calculation.slice(0, -1);
        } else if (calculation.at(-1) === " ") {
          newValue = calculation.slice(0, -3);
        }

        calculation = newValue;
        break;
    }

    if (!calculation) {
      document.querySelector("#result").innerHTML = "";
      calculation = "";
    } else if (
      calculation[1] === "/" ||
      calculation[1] === "*" ||
      calculation[0] === "." ||
      calculation[0] === "(" ||
      calculation[0] === ")" ||
      calculation[0] === "=" ||
      calculation === "undefined"
    ) {
      calculation = "";
      alert("please enter digit first!");
    } else if (calculation.length > 12) {
      alert("you can enter maximum 12 digits");
    } else {
      document.querySelector("#result").innerHTML = calculation;
    }
  });
});
