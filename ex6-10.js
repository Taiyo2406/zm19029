var img = new Array();

img[0] = new Image();
img[0].src = "keiei_small.jpg";
img[1] = new Image();
img[1].src = "onion.gif";
img[2] = new Image();
img[2].src=  "image/2.jpg";


//画像番号用のグローバル変数
var cnt=0;


//画像切り替え関数
function changeIMG(){
  
  //画像番号を進める
  if (cnt == 2)
  { cnt=0; }
  else
  { cnt++; }
  
  //画像を切り替える
  document.getElementById("gazo").src=img[cnt].src;
}