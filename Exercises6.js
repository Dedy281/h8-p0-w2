/* 1. Melakukan Looping Menggunakan While */

var number = 2;

console.log('LOOPING PERTAMA');
while (number <= 20){
    console.log(number + ' - I love coding'); number +=2;
}

var number2 = 20;

console.log('LOOPING KEDUA');
while (number2 >= 2){
    console.log(number2 + ' - I will become fullstack developer'); number2 -=2;
}

//==================================================================================

/* 2. Melakukan Looping Menggunakan For */

console.log('LOOPING PERTAMA');
for(var deret = 1; deret <=20; deret++) {
    console.log(deret + ' - I love cooding');
}

console.log('LOOPING KEDUA');
for(var deret2 = 20; deret2 >=1; deret2--) {
    console.log(deret2 + ' - I will become fullstack developer');
}

//===================================================================================

/* 3. Angka Ganjil dan Genap */

for(var deret3 = 1; deret3 <=100; deret3++) {
    if(deret3 %2===0){
    console.log("genap");}
      else {
        console.log("ganjil");
      }
  }


  for(var kelipatan3 = 1; kelipatan3 <=100; kelipatan3+=2) {
    if(kelipatan3 %3===0){
    console.log("3 kelipatan 3");}
      else {
        console.log("");
      }
  }
  

  for(var kelipatan6 = 1; kelipatan6 <=100; kelipatan6+=5) {
    if(kelipatan6 %6===0){
    console.log("6 kelipatan 6");}
      else {
        console.log("");
      }
  }


  for(var kelipatan10 = 1; kelipatan10 <=100; kelipatan10+=9) {
    if(kelipatan10 %10===0){
    console.log("10 kelipatan 10");}
      else {
        console.log("");
      }
  }