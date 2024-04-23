console.log(quiz_select)
console.log("ok_num",ok_num)
console.log("new_num",new_num)
console.log("friend_num",friend_num)
console.log("imgass",imgass)

let resultElement = document.querySelector('.result');
let addElement = document.querySelector('.add');
let addElement2 = document.querySelector('.add2');
let addElement3 = document.querySelector('.add3');
let cardElement = document.querySelector('.card');

addElement3.textContent = `${parseInt(friend_num)+30}`

if (ok_num>0){
  resultElement.textContent = `${ok_num}問正解！`
  resultElement.style.color = "red"; // 赤色に設定
  //新しく追加する仲間の確認
  if (new_num>0){//新しく追加する仲間がいる。
    addElement.textContent = `新しく下の${new_num}匹が仲間に加わりました！ビンゴカードに登場するよ！`
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
imgass.forEach(imagePath => {
  //要素作成
  let divSquare = document.createElement('div');//セルのdiv要素作成。
  let div = document.createElement('div');//セル内に画像を配置するためのdiv要素作成。
  let img = document.createElement('img');;//img要素の作成。
  cardElement.appendChild(divSquare);
  divSquare.appendChild(img);//div要素の中にimg要素を追加。
  divSquare.classList.add('square'); //作成したセルにsquareクラスを追加。
  // 画像のURLを設定
  img.src = imagePath;
});
cardElement.style.width = `${new_num * 100+10}px`; // 100pxはsquare要素の幅に合わせた適切な幅を設定
}
