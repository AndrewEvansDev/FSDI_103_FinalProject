const Num1 = Number(prompt('enter a number'));
const Num2 = Number(prompt('enter a number'));

const addition = (num1,num2) => num1 + num2;
const subtraction = (num1,num2) => num1 - num2;
const multiply = (num1,num2) => num1 * num2;
const divide = (Num1,Num2) => num1 / num2;

let solution;
let html = '';

if(isNaN(Num1)){
    alert('ONLY REAL NUMBERS PUNK!');
}else if(isNaN(Num2)){
    alert('ONLY REAL NUMBERS PUNK!')
}else{



switch(prompt('Which operation to perform? Enter symbol: * or / or + or -')){
    case '+':
        solution = addition(Num1,Num2);
        html += `<p>${Num1} + ${Num2} = ${solution}</p>`
        break;
    case '-':
        solution = subtraction(Num1,Num2);
        html += `<p>${Num1} - ${Num2} = ${solution}</p>`
        break;
    case '*':
        solution = multiply(Num1,Num2);
        html += `<p>${Num1} x ${Num2} = ${solution}</p>`
        break;
    case '/':
        solution = divide(Num1,Num2);
        html += `<p>${Num1} / ${Num2} = ${solution}</p>`
        break;
    }
}
document.querySelector('main').innerHTML = html;






