//1
let suma = 0;
while (suma<100){
    suma+=Math.floor(Math.random() * 10+1);
    console.log(suma)
}
console.log(suma)

// 2

console.log('--------------2-------------')


let suma1 = 1;
while (suma1 %7 != 0){
    console.log('ciklo pradzioja turimas skaicius',suma1)
    suma1+=Math.floor(Math.random() * 10+1);
    console.log(suma1)
}
console.log('suma kuri dalinasi is 7',suma1)

console.log('---------------------------')
console.log('----------------4-----------')
console.log('---------------------------')
                                                                            
//4
let num=0
while (num !=5){
    num=Math.floor(Math.random() * 10+1);
    console.log(num)
}
console.log('---------------------------')
console.log('----------------5----------')
console.log('---------------------------')
//5
let troll=0;
let ciklsk=0;
while (troll !=5 && troll !=7){
    troll=Math.floor(Math.random() * 10+1);
    console.log(troll);
    ciklsk++
}
console.log('ciklu',ciklsk);