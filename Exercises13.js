
function xo(str){
    var jumlahO = 0;
    var jumlahX = 0;
      for (var a = 0; a < str.length; a++){
        var huruf = str.charAt(a);
        if (huruf == 'o'){
          jumlahO++
        }
        if (huruf == 'x'){
          jumlahX++
        }
      }
    
    if (jumlahO == jumlahX){
      return true
    }
    else {
      return false
    }
  }
  
  console.log(xo('xoxoxo'));
  console.log(xo('oxooxo'));
  console.log(xo('oxo'));
  console.log(xo('xxxooo'));
  console.log(xo('xoxooxxo'));
  