/*const numberButtons = document.querySelectorAll('Number')
const operationButtons = document.querySelectorAll('operator')
const equalsButton = document.querySelector('result')
const allClearButton = document.querySelector('clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }
}

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

appendNumber(number) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
      })
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
}*/


let string = "";
let numberButtons = document.querySelectorAll('.Number');
let operatorButtons = document.querySelectorAll('.operator');
let resultButton = document.querySelectorAll('.result');

Array.from(numberButtons).forEach((Number) => {
    Number.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string
        }

        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector('input').value = string
        }

        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string
    }
    })
})

Array.from(operatorButtons).forEach((operator) => {
    operator.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector('input').value = string
        }

        else if(e.target.innerHTML == "C"){
            string = ""
            document.querySelector('input').value = string
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string
        }
    })
})

