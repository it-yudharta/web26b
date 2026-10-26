const langkah1 = 5 + 5;
const hasil = langkah1 / 5;
// console.log(hasil);

const langkah4 = 10 + 10;
const hasil2 = langkah4 / 5;
// console.log(hasil2);

function hitung(nilai1) {
    const langkah1 = nilai1 + nilai1;
    const hasil = langkah1 / 5;
    return hasil;
}

const hasil3 = hitung(10);
const hasil4 = hitung(5);
// console.log('hasil', hasil3, hasil4);

const hitung2 = (nilai) => (nilai * 2) / 5;

const hasil5 = hitung2(10);
const hasil6 = hitung2(5);
console.log('hasil', hasil5, hasil6);
