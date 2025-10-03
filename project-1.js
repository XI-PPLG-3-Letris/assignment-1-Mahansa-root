let a = 1;
let b = 2;

const pertambahan = () =>{
    let c = a + b;
    return c;
}

const pengurangan = () =>{
    let c = a - b;
    return c;
}

const pembagian = () =>{
    let c = a / b;
    return c;
}

const perkalian = () =>{
    let c = a * b;
    return c;
}

const perpangkatan = () =>{
    let c = a ** b;
    return c;
}

const modulus = () =>{
    let c = a % b;
    return c;
}

// console.log(`Hasil dari ${a} + ${b} = ${pertambahan()}`)
// console.log(`Hasil dari ${a} - ${b} = ${pengurangan()}`)
// console.log(`Hasil dari ${a} * ${b} = ${perkalian()}`)
// console.log(`Hasil dari ${a} / ${b} = ${pembagian()}`)
// console.log(`Hasil dari ${a} ^ ${b} = ${perpangkatan()}`)
// console.log(`Hasil dari ${a} % ${b} = ${modulus()}`)


console.log(`a = ${a}`);
console.log(`b = ${b}\n`);
console.log(`tambah(a,b)`)
console.log(`log : Penjumlahan ${a} + ${b} = ${pertambahan()}\n`);


console.log(`kurang(a,b)`)
console.log(`log : Pengurangan ${a} - ${b} = ${pengurangan()}\n`);


console.log(`kali(a,b)`)
console.log(`log : Perkalian ${a} * ${b} = ${perkalian()}\n`);

console.log(`bagi(a,b)`)
console.log(`log : Pembagian ${a} / ${b} = ${pembagian()}\n`);

console.log(`Modulus(a,b)`)
console.log(`log : Modulus ${a} % ${b} = ${modulus()}\n`);

console.log(`perpangkatan(a,b)`)
console.log(`log : Perpangkatan ${a} ^ ${b} = ${perpangkatan()}\n`);