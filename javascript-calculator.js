const displayMain = document.getElementsByClassName("display-main");
const spanOperation1 = document.getElementsByClassName("span-operation1");
const spanOperator = document.getElementsByClassName("span-operator");
const spanOperation2 = document.getElementsByClassName("span-operation2");
const spanEq = document.getElementsByClassName("span-eq");

const buttonOne = document.getElementsByClassName("button one");
const buttonTwo = document.getElementsByClassName("button two");
const buttonThree = document.getElementsByClassName("button three");
const buttonFour = document.getElementsByClassName("button four");
const buttonFive = document.getElementsByClassName("button five");
const buttonSix = document.getElementsByClassName("button six");
const buttonSeven = document.getElementsByClassName("button seven");
const buttonEight = document.getElementsByClassName("button eight");
const buttonNine = document.getElementsByClassName("button nine");
const buttonZero = document.getElementsByClassName("button zero");
const buttonDot = document.getElementsByClassName("button dot");

const buttonAc = document.getElementsByClassName("button ac");
const buttonCe = document.getElementsByClassName("button ce");

const buttonPlus = document.getElementsByClassName("button plus");
const buttonMinus = document.getElementsByClassName("button minus");
const buttonMult = document.getElementsByClassName("button mult");
const buttonDiv = document.getElementsByClassName("button div");

const buttonEq = document.getElementsByClassName("button eq");

buttonOne[0].addEventListener("click", pressOne);
buttonTwo[0].addEventListener("click", pressTwo);
buttonThree[0].addEventListener("click", pressThree);
buttonFour[0].addEventListener("click", pressFour);
buttonFive[0].addEventListener("click", pressFive);
buttonSix[0].addEventListener("click", pressSix);
buttonSeven[0].addEventListener("click", pressSeven);
buttonEight[0].addEventListener("click", pressEight);
buttonNine[0].addEventListener("click", pressNine);
buttonZero[0].addEventListener("click", pressZero);
buttonDot[0].addEventListener("click", pressDot);

buttonAc[0].addEventListener("click", pressAc);
buttonCe[0].addEventListener("click", pressCe);

buttonPlus[0].addEventListener("click", pressPlus);
buttonMinus[0].addEventListener("click", pressMinus);
buttonMult[0].addEventListener("click", pressMult);
buttonDiv[0].addEventListener("click", pressDiv);

buttonEq[0].addEventListener("click", pressEq);

function pressOne()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 1;
  }

  else
  {
    displayMain[0].innerHTML += 1;
  }
}

function pressTwo()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 2;
  }

  else
  {
    displayMain[0].innerHTML += 2;
  }
}

function pressThree()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 3;
  }

  else
  {
    displayMain[0].innerHTML += 3;
  }
}

function pressFour()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 4;
  }

  else
  {
    displayMain[0].innerHTML += 4;
  }
}

function pressFive()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 5;
  }

  else
  {
    displayMain[0].innerHTML += 5;
  }
}

function pressSix()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 6;
  }

  else
  {
    displayMain[0].innerHTML += 6;
  }
}

function pressSeven()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 7;
  }

  else
  {
    displayMain[0].innerHTML += 7;
  }
}

function pressEight()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 8;
  }

  else
  {
    displayMain[0].innerHTML += 8;
  }
}

function pressNine()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 9;
  }

  else
  {
    displayMain[0].innerHTML += 9;
  }
}

function pressZero()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  if (displayMain[0].innerHTML == 0)
  {
    displayMain[0].innerHTML = 0;
  }

  else
  {
    displayMain[0].innerHTML += 0;
  }
}

function pressDot()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  let displayMainStr = displayMain[0].innerHTML;

  if (displayMainStr.includes(".") == false)
  {
    displayMain[0].innerHTML += ".";

  }
}

function pressAc()
{
  displayMain[0].innerHTML = 0;
  spanOperator[0].innerHTML = "";
  spanOperation1[0].innerHTML = 0;
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
}

function pressCe()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  displayMain[0].innerHTML = 0;
}

function pressPlus()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  spanOperation1[0].innerHTML = displayMain[0].innerHTML;
  spanOperator[0].innerHTML = "+";
  displayMain[0].innerHTML = 0;
}

function pressMinus()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  spanOperation1[0].innerHTML = displayMain[0].innerHTML;
  spanOperator[0].innerHTML = "-";
  displayMain[0].innerHTML = 0;
}

function pressMult()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";
  spanOperation1[0].innerHTML = displayMain[0].innerHTML;
  spanOperator[0].innerHTML = "*";
  displayMain[0].innerHTML = 0;
}

function pressDiv()
{
  spanOperation2[0].innerHTML = "";
  spanEq[0].innerHTML = "";

  spanOperation1[0].innerHTML = displayMain[0].innerHTML;
  spanOperator[0].innerHTML = "/";
  displayMain[0].innerHTML = 0;
}

function pressEq()
{
  spanOperation2[0].innerHTML = displayMain[0].innerHTML;
  spanEq[0].innerHTML = "=";

  switch(spanOperator[0].innerHTML)
  {
    case "+":
      displayMain[0].innerHTML = parseFloat(spanOperation1[0].innerHTML) + parseFloat(displayMain[0].innerHTML);
    break;

    case "-":
      displayMain[0].innerHTML = parseFloat(spanOperation1[0].innerHTML) - parseFloat(displayMain[0].innerHTML);
    break;

    case "*":
      displayMain[0].innerHTML = parseFloat(spanOperation1[0].innerHTML) * parseFloat(displayMain[0].innerHTML);
    break;

    case "/":
      displayMain[0].innerHTML = parseFloat(spanOperation1[0].innerHTML) / parseFloat(displayMain[0].innerHTML);
    break;

    default:
      spanOperation1[0].innerHTML = "";
    break;
  }
}