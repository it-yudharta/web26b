var fakultas = 'Teknik';
let nama = 'Cahya Bagus Sanjaya';
nama = 'Cahya';

const alamat = 'Purwosari Pasuruan';
// console.log(`Nama: ${nama}, dari: ${alamat}, fakultas: ${fakultas}`);

const hobi = ['membaca', 'berenang', 'menari'];
hobi[2] = 'memancing';

// tidak bisa langsung diubah karena variable konstan
// hobi = ['memanah'];
// console.log(hobi);

const baca = hobi[2]
// console.log(baca)s

const dataExcel = [
    ['no', 'nama', 'alamat'],
    [1, 'Cahya', 'Purwosari'],
    [2, 'Bagus', 'Purwodadi'],
    [3, 'Sanjaya', 'Sukorejo'],
];

const data = dataExcel[3][0]
console.log(data)