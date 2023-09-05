let numberA = prompt('Insira um número');
let numberB = prompt('Insira outro número');

numberA = Number(numberA);
numberB = Number(numberB);

let sum = numberA + numberB;
alert (`A soma de ${numberA} + ${numberB} é = ${sum}`);
let sub = numberA - numberB;
alert (`A subtração de ${numberA} - ${numberB} é = ${sub}`);
let multi = numberA * numberB;
alert (`A multiplicação de ${numberA} * ${numberB} é = ${multi}`);
let div = numberA / numberB;
alert (`A divisão de ${numberA} / ${numberB} é = ${div}`);
let rest = numberA % numberB;
alert (`o resto da divisão de ${numberA} + ${numberB} é = ${rest}`);

if(sum % 2 === 0){
  alert(`a soma dos dois números é par: ${sum}`);
}else{
  alert(`a soma dos dois números é ímpar: ${sum}`);
}

if(numberA == numberB){
  alert('os dois números são iguais');
}else{
  alert('os dois números são diferentes');
}
