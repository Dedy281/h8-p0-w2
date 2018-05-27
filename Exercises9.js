/* Tugas 1 */

function shoutOut(){
    var halo = "Halo Function!";
    return halo;
  }
  console.log(shoutOut());

//=====================================================
/* Tugas 2 */

function calculateMultiply (num1, num2){
    return num1 * num2
  }
  
  var num1 = 5;
  var num2 = 6;
  var hasilPerkalian = calculateMultiply(num1,num2);
  
  console.log(hasilPerkalian);

  //===================================================
  /* Tugas 3 */

  function processSentence (name, age, address, hobby){
    var combinedName = "Nama saya ";
    var combinedAge = " umur saya ";
    var combinedAddress = " alamat saya ";
    var combinedHobby = " dan punya hobby yaitu ";
  return combinedName + name + combinedAge + age + combinedAddress + address + combinedHobby + hobby
  }
  var name = "Agus,";
  var age = "30,";
  var address = "Jln. Malioboro, Yogjakarta,";
  var hobby = "gaming!";
  
  var fullSentence = processSentence(name, age, address, hobby);
  
  console.log(fullSentence);