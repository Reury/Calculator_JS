//console.log("works")
class Calculator{




    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = this.previousOperandTextElement
        this.currentOperandTextElement = this.currentOperandTextElement
        this.clear();
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    

    delete(){
        this.currentOperand = this.currentOperand.slice(0,this.currentOperand.length -1)
        
    }

    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return
        //console.log("entrou o numero : "+ number)
        this.currentOperand = currentOperandTextElement.innerText + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand === '' ) return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        /*console.log(operation)
        console.log(this.currentOperand)
        */
        this.previousOperand = currentOperandTextElement.innerText + operation
        this.currentOperand = ''

    }


    compute(){
        this.previousOperand =previousOperandTextElement.innerText +this.currentOperand
        switch(this.operation){
            case '+':
                this.currentOperand = parseFloat(this.previousOperand)  
                + parseFloat(this.currentOperand);
                break;
            case '-':
                this.currentOperand = parseFloat(this.previousOperand)  
                - parseFloat(this.currentOperand);
                break;
            case '*':
                this.currentOperand = parseFloat(this.previousOperand)  
                * parseFloat(this.currentOperand);
                break;
             case '/':
                    this.currentOperand = parseFloat(this.previousOperand)  
                    / parseFloat(this.currentOperand);
                    this.currentOperand = parseFloat(this.currentOperand).toFixed(2)
                    break;
    
        }
            
        

    }

    updateDisplay(){
        currentOperandTextElement.innerText = this.currentOperand
        previousOperandTextElement.innerText = this.previousOperand
    }



}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

/*previousOperandTextElement.addEventListener('click',()=>{
    console.log("teste pra ver se area ta pegando correto")
})*/


numberButtons.forEach(numberButtons => {
    numberButtons.addEventListener('click', ()=>{
        //console.log("clickou") works til here
        calculator.appendNumber(numberButtons.innerText) 
        //console.log("apertou : " + numberButtons.innerText)
        calculator.updateDisplay()
    })
    
});

operationButtons.forEach(operationButtons => {
    operationButtons.addEventListener('click', ()=>{
        //console.log("clickou") works til here
        //console.log(operationButtons.innerText)
        calculator.chooseOperation(operationButtons.innerText) 
        calculator.updateDisplay()
    })
    
});


//console.log(deleteButton.innerText)

deleteButton.addEventListener('click', ()=>{
    //console.log("clickou para apagar")
    calculator.delete()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})


equalsButton.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})