
/*const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
  calculatorScreen.value = number;
};
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  //console.log(number)
  number.addEventListener("click", (event) => {
console.log(event.target.value)

})
});
let preNumber ='';
let calculatorOperator ='';
let currentNumber ='0';

const inputNumber =(number) => {
  if (currentNumber ==='0')  {
    currentNumber = number;
  }
  else {
  currentNumber += number;
}

numbers.foreach((number) =>{
  number.addEventlistener("click", (event) => {
    inputnumber(event.target.value);
    updateScreen(currentnUmber);

  })
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator)=> {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  })
});

const inputOperator = (operator) => {
  if (calculationOperator ==='') {
  prevNumber =currentNumber;
}
  calculationOperator = operator;
  currentNumber='0';
}

conts equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click',() =>{
  calculate();
  updateScreen(currentNumber);
  //console.log('equal button is pressed')
});
const calculate = () => {
  let result ='';
  switch(calculationOperator) {
    case "+":
    result =parseFloat + parseFloat(currentNumber)
    break
    case "-":
    result =prevNumber -currentNumber
    break
    case"*":
    result =prevNumber * currentNumber
    break
    case "/":
    result =prevNumber / currentNumber
    break
    case "%":
    result=percentage(currentNumber/100)
    default:
    return
  }
  currentNumber = result;
  calculationOperator='';
}

const clearAll = () => {
  prevNumber ='';
  calculationOperator ='';
  currentNumber ='0';
}
const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
//  console.log('AC button is pressed')
clearAll();
updateScreen(currentNumber);
});

inputDecimal =(dot) => {
  if(currentNumber.includes('.') {
    return
  }
  currentNumber += dot;
}
const desimal = document.querySelector('.decimal');
decimal.addEventListener('click', (event) =>
inputDecimal(event.target.value);
updateScreen(currentNumber);
});
*/

let prevNumber = ''
let calculationOperator =''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value)
    })
})

const calculate = () =>{
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*" :
            result = prevNumber * currentNumber
            break
        case "/" :
            result = prevNumber / currentNumber
            break
        case "%":
            result=percentage(currentNumber/100)
            default:
            return
        
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () =>{
        calculate ()
    updateScreen(currentNumber)
})

const clearAll =() => {
    prevNumber = ''
    calculationOperator =''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clean')

clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
