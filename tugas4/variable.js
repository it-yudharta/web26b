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
// console.log(data)

// console.log('55' + '55');
// console.log(55 + 55);
// console.log(true, false, null, undefined);

const dosen = {
    nama: 'Cahya Bagus Sanjaya',
    alamat: 'Purwosari',
    fakultas: 'Teknik',
}
// console.log(dosen.alamat);

const dataDosen = [
    {id: 1, nama: 'Cahya', fakultas: 'Teknik', skor: 10 },
    {id: 2, nama: 'Bagus', fakultas: 'Teknik', skor: 20 },
    {id: 3, nama: 'Sanjaya', fakultas: 'PAI', skor: 25 },
];

const filter = dataDosen.filter(x => x.fakultas === 'Teknik' );
// console.log(filter);

const mapData = dataDosen.map(
    ({id, nama, skor}) => ({
        id, 
        nama, 
        lulus: (skor > 10) ? 'Lulus' : 'Mengulang',
    })
);

// console.log(mapData);

const reduce = dataDosen.reduce((x, y) => x + y.skor, 0);
console.log(reduce);
