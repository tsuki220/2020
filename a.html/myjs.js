function ThreeSecChange() { 
//関数imgchange1()を3000ミリ秒間隔で呼び出す 
  setInterval("imgchange12()",3000); } 
  

function imgchange12() {
  document.getElementById('logo2').src = './brown2.png';
}

function ChangeImageAndBack(){
  
  imgback();
  
  ThreeSecChange2(); 
  
}


function ThreeSecChange2(){
  setTimeout("imgchange2()",3000);
}
function imgchange2() {
  document.getElementById('img13').src = './brown.jpg';
}

function imgback() {
  document.getElementById('img13').src = './brown2.png';
}