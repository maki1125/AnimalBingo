//console.log(quiz_select)
//console.log("ok_num",ok_num)
//console.log("new_num",new_num)
//console.log("friend_num",friend_num)


let resultElement = document.querySelector('.result');
let addElement = document.querySelector('.add');
let addElement2 = document.querySelector('.add2');
let addElement3 = document.querySelector('.add3');
let cardElement = document.querySelector('.card');
let outer = document.querySelector('.outer');
addElement3.textContent = `${parseInt(friend_num)+30}` //仲間の数

if (ok_num>0){
  resultElement.textContent = `${ok_num}問正解！`
  resultElement.style.color = "red"; // 赤色に設定
  //新しく追加する仲間の確認
  if (new_num>0){//新しく追加する仲間がいる。
    addElement.textContent = `新しく下の${new_num}匹が仲間に加わりました！コレクションで確認しよう！`
    cardElement.style.display = 'flex';//カードを表示させる。 
    if (new_num!=ok_num) {
      addElement2.textContent = `これで全ての仲間を集めました!おめでとう!!`  
    }
  }else{
    addElement.textContent = `全ての仲間を集めました!おめでとう!!`
  }
}else{//正解数０の場合
  resultElement.textContent = `${ok_num}問正解！`
  addElement.textContent = "正解を目指してクイズに再挑戦しよう！"
  resultElement.style.color = "blue"; // 赤色に設定
}
imgShow();

// 各画像URLに対して処理を繰り返す
function imgShow(){
//imgass.forEach(imagePath => {
for(let i = 0; i < 5; i++){
  //要素作成
  let divSquare = document.createElement('div');//セルのdiv要素作成。
  let div = document.createElement('div');//セル内に画像を配置するためのdiv要素作成。
  let img = document.createElement('img');;//img要素の作成。
  if (i<ok_num){
    img.src = imgass[i]; // 画像のURLを設定
  }else{
    img.src = question_imgass;
  }
  //col.appendChild(divSquare);
  div.appendChild(img);//div要素の中にimg要素を追加。
  divSquare.appendChild(div);
  outer.appendChild(divSquare);
  
  divSquare.classList.add('square'); //作成したセルにsquareクラスを追加。
  //col.classList.add('col-md-3'); //作成したセルにsquareクラスを追加。
  //col.classList.add('col-sm-6');
 
}
//});
console.log(window.getComputedStyle(cardElement).width/(5/ok_num));
//cardElement.style.width = `${parseInt(window.getComputedStyle(cardElement).width)/(5/ok_num)}px`; // 100pxはsquare要素の幅に合わせた適切な幅を設定
}
// 画面サイズに応じて変数を設定
let squareWidth;
if (window.innerWidth > 500) { // 例えば、768pxより大きい場合
  squareWidth = 100/ok_num;
} else { // それ以外の場合
  squareWidth = 33;
}

//$('.square').css('flex', `0 0 ${squareWidth}%`);