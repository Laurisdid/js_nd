// 1 uzd
let n1 = 20;
if (n1 > 0) {
  console.log(`ivestas skaicius ${n1} yra teigiamas`);
} else console.log(`${n1} yra neigiamas`);

console.log();
//2 uzt

let a = 2;
if (a > 2) {
  console.log(`Raudona.`);
} else if (a >= 2) {
  console.log(`Palaukite.`);
} else {
  console.log(`zalia`);
}

console.log();
//3 uzt
console.log();
let d = 2;
let k = 8;
let n = 5;
let nd = d * n;
if (k <= nd) {
  console.log(`Knygos telpa į dėžes`);
} else {
  console.log(`Knygos Netelpa į dėžes`);
}

console.log();
//4 uzd

let b = 5;
let c = 2;
if (b > c) {
  c++;
  b--;
  console.log(`${b}B yra daugiau uz C${c}`);
} else {
  b++;
  c--;
  console.log(`${b}B yra maziau uz C${c}`);
}

//5uzd
console.log();

let ccentu = 50;
let pkaina = 20;
let kartu = 2;
let apsipirkimoSuma = pkaina * kartu;
let likutis = ccentu - apsipirkimoSuma;
console.log(`liks centu ${likutis}`);
console.log();

//6uzd

let degtukai = 3;
if (degtukai / 3 == Math.trunc(degtukai / 3)) {
  //     be liekanos
  console.log(`Trikampį sudėlioti galima.`);
} else console.log(`Trikampį sudėlioti negalimas`);

//7uzd
//8uzd

let kauliukas = 3;
if (kauliukas == 1) {
  console.log(`kambari tvarko 1 brolis`);
} else {
  if (kauliukas == 2) {
    console.log(`kambari tvarko 2 brolis`);
  } else {
    if (kauliukas == 3) {
      console.log(`kambari tvarko 1 brolis`);
    } else {
      if (kauliukas == 4) {
        console.log(`kambari tvarko 2 brolis`);
      } else {
        if (kauliukas == 5) {
          console.log(`kambari tvarko 1 brolis`);
        } else {
          if (kauliukas == 6) {
            console.log(`kambari tvarko 2 brolis`);
          }
        }
      }
    }
  }
}
// 9 uzt
let metai=1904
if (metai<1896){
        console.log(`dar nebuvo olimpiniu`)
    }else if (metai/4 === Math.trunc(metai/4)){
        console.log(`olimpines buvo`)
        let n =metai
        n = n-1896
        n = n /4 +1
        console.log(`sios olimpines yra ${n} `)
    }else{
        console.log(`metai neolimpiniai`)
    }

    ///10

    