function suma(a, b){
    return `${a}+${b}= ${a+b}`
}

const s1 = suma(2,3)
console.log(s1);

console.log('------2----')
function palygink(num1, num2) {
    if (num1 > num2) {
        return num1 + ' yra didesnis uz ' + num2;
    } else if (num1 < num2) {
        return num1 + ' yra mazesnis uz ' + num2;
    } else {
        return num1 + ' yra lygus ' + num2;
    }
}
const rezultatas = palygink (10,20);
console.log(rezultatas); 

console.log('------4----')

let x = pakelimas(3); 

function pakelimas(a) {
  return (a ** a);
}
console.log(x)


console.log('------5----')

function sumaIntervale(iki) {
    let suma = 0;
    for (let i = 1; i <= iki; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumaIntervale(3))


console.log('------6----')
