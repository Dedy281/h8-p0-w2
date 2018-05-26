/* 1. Menyusun Barisan Bintang */

var rows1 = 5;

var kondisi = true

while (rows1 !== 0) {
    rows1 = rows1 - 1
    console.log('*')
}

//=====================================================
/* 2.Menyusun Barisan Bintang Dengan Nested Looping */

var rows2 = 5

for (var baris = 0; baris < rows2; baris++) {
    var print = ''
    for (var kolom = 0; kolom < rows2; kolom++)

    print = print + '*'
    console.log (print)
}

//======================================================
/* 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping */

var rows3 = 5;
var kolom3= 1;

for (var baris2 = 0; baris2 < rows3; baris2++) {
    var print = ''
    for (var kolom2 = 0; kolom2 < kolom3; kolom2++){

    print = print + '*'}
    console.log (print); kolom3++;
}

