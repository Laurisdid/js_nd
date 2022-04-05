for (let i=0;i<5;i++){
    console.log('Labas')
}
console.log('-----------')
for(i=0;i<5;i++){
    console.log(i)
}
console.log('-----------')
for (i=0;i<50;i++){
    if (i%10===0){
    console.log(i)
    }
}
console.log('-----------')

for (i=0;i<60;i++){
    if (49<=i && i<=53){
    console.log(i)
    }
}
console.log('------5-----')
for(i=0;i<10;i++){
    i++;
    console.log(i)
}
console.log('------6----')
//6
for(i=0;i<20;i++){
    if (i%3!==0){
        console.log(i)
        }
}
console.log('------7----')
let y=3;
for(i=0;i<10;i++){
    let suma=y*i
    console.log(`${y} * ${i} = ${suma} `)
}
console.log('------8----')
let n=5;
let colis=2.54;
for(i=1;i<=n;i++){
    let csuma= i*colis
    console.log(`${i}centimetru = ${csuma}coliu `)
}
console.log('------9----')
let pinigai =100
let metai=5;
let gpinigai=0;
for (i=1;i<=metai;i++){
    gpinigai=gpinigai+pinigai/100*2
    console.log(`${i}metais = ${gpinigai} pinigu pliuso sumoi:${pinigai+gpinigai} `)
}