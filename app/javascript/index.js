let page = page2; //page2はhtmlから受け取るページ番号
let page_add = (parseInt(page)-1)*20 //ページ→IDへ変換
let colnum //指定した絵柄のコレクション一覧　ex[1,4,7]
let colimgass //指定した絵柄のコレクションのアセット変換したimgパスの一覧
let col_card = document.getElementById('col_card'); //htmlに設定
let pic //上ボタンの選択されている絵柄。どうぶつ、さかな、きょうりゅう。
let all_imgass //選択された絵柄の全ての画像
let friend; //仲間の数
const COLUMN_LENGTH = 4; //表示マスの行数
const ROW_LENGTH = 5; //表示マスの列数
const squareWidth = 100 / ROW_LENGTH; // カラム数に基づいたマスの幅

// 初期一覧作成
for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){// 画像をマス上に表示
  //要素作成
  let divSquare = document.createElement('div');//セルのdiv要素作成。
  let div = document.createElement('div');//セル内に画像を配置するためのdiv要素作成。
  let img = document.createElement('img');//img要素の作成。
  col_card.appendChild(divSquare);
  divSquare.appendChild(div);
  div.appendChild(img);//div要素の中にimg要素を追加。
  divSquare.classList.add('square'); //作成したセルにsquareクラスを追加。
  img.setAttribute('id', `${i}`);
  addClickEvent(img,i) //ますをクリックした時の動きを追加 
}

pictureData(picture_mode) //一覧表示のためのデータ取得
changeImage() // 画像の表示
$('.square').css('flex', `0 0 ${squareWidth}%`);//ビンゴカードの並びの設定

// 画像に動きをつける関数
function addClickEvent(img,index) {
img.addEventListener('click', function(event) {
    if (img.classList.contains("ok")) {
        handleImageClick(index); //詳細ページにとぶ
    } else {
      //左右に振るわせる。
      let div = img.parentNode; // img要素の親ノードを取得
      $(div).animate({left: '+=20'},100);
      $(div).animate({left: '-=40'},100);
      $(div).animate({left: '+=40'},100);
      $(div).animate({left: '-=40'},100);
      $(div).animate({left: '+=20'},100);
      //console.log("違うよ")
      //console.log(img)
      }
  });
}

//詳細ページ表示
function handleImageClick(imageId) {
  // クリックされた画像のIDを使用して詳細ページのURLを構築
  const detailPageUrl = `/collections/${imageId+(parseInt(page)-1)*20}?page=${page}&picture_mode=${picture_mode}`;
  // 詳細ページへリダイレクト
  window.location.href = detailPageUrl;
}

//詳細->一覧の時の下ボタンの処理
const buttons = document.querySelectorAll('.btn2');
let btn2_count = 1
// すべてのボタンの色を元に戻す
buttons.forEach(btn => {
  btn.classList.remove('selected');
  if (btn2_count==page){
    btn.classList.add('selected');
  }
  btn2_count += 1;
});
//下ボタンの要素の取得（ページの選択）
//let page_add = 0;

// ボタン要素を取得する
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // すべてのボタンの色を元に戻す
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });
    // クリックされたボタンの色を変更する
    button.classList.add('selected');
    // クリックされたボタンのテキストを変数に代入する
    page = button.textContent; //ページの取得
    page_add = (parseInt(page)-1)*20 //ページ→IDへ変換
    changeImage() //画像を変更する
    //console.log(page,pic_no)
  });
});


//上ボタンの要素（絵柄の選択）
const pic_buttons = document.querySelectorAll('.btn1');//ボタンの要素取得
pic_buttons.forEach(button => {
  button.addEventListener('click', () => {
    //上ボタンの色の操作
    pic_buttons.forEach(btn => {// すべてのボタンの色を元に戻す
      btn.classList.remove('selected');
    });
    button.classList.add('selected');// クリックされたボタンの色を変更する
    //下ボタンの色の操作
    let page_buttons = document.querySelectorAll('.btn2');
    page_buttons.forEach(btn => {// すべてのボタンの色を元に戻す
      btn.classList.remove('selected');
    });
    let page_btn = document.getElementById('pg1');//下のページ選択ボタンの初期選択の色変更
    page_btn = document.getElementById('pg1');//下のページ選択ボタンの初期選択の色変更
    page_btn.classList.add('selected');
    // クリックされたボタンのテキストを変数に代入する
    page = 1; //ページの取得
    page_add = (parseInt(page)-1)*20 //ページ→IDへ変換
    pic = button.id;// クリックされたボタンのテキストを変数に代入する.マスのIDと被るため、数字はつけられなかったのでテキストのID.
    switch(pic){
      case "どうぶつ":
        picture_mode = 1;
        break
      case "さかな":
        picture_mode = 2;
        break
      case "きょうりゅう":
        picture_mode = 3;
        break
    }
    //console.log(picno,pic)
    pictureData(picture_mode)//選択した絵柄のデータ取得
    changeImage() //一覧の絵柄変更
  });
});

//指定のpictureデータの取得
function pictureData(picture_mode) {  
  let pic_btn;
  switch (picture_mode) {
    case 1: //"どうぶつ":
      all_imgass = allanimal_imgass;
      colnum = colanimal_img.map(path => path.match(/\d+/)[0]); // パスから数字を抽出して配列に入れる。最初は動物のデータを入れる。
      colimgass = colanimal_imgass;
      pic_btn = document.getElementById('どうぶつ');//上の絵柄選択ボタンの初期選択の色変更
      pic_btn.classList.add('selected');
      friend = animal_quiz+30
      break;
    case 2: //"さかな":
      all_imgass = allfish_imgass;
      colnum = colfish_img.map(path => path.match(/\d+/)[0]); // パスから数字を抽出して配列に入れる。
      colimgass = colfish_imgass;
      pic_btn = document.getElementById('さかな');
      pic_btn.classList.add('selected');
      friend = fish_quiz+30
      break;
    case 3: //"きょうりゅう":
      all_imgass = alldinosaur_imgass;
      colnum = coldinosaur_img.map(path => path.match(/\d+/)[0]); // パスから数字を抽出して配列に入れる。
      colimgass = coldinosaur_imgass;
      pic_btn = document.getElementById('きょうりゅう');
      pic_btn.classList.add('selected');
      friend = dinosaur_quiz+30
      break;
    default:
      // 何もしない
  }
}

//マス一覧画像の変更
function changeImage(){
  let divSquare = document.querySelectorAll('.square'); //htmlに設定
  for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){
    let imgElement = document.getElementById(i);
    //クイズで集めた仲間かどうか確認
    if (page_add+i<=friend){
      imgElement.src = all_imgass[page_add+i-1]
      imgElement.classList.add("ok");
    }else{
      imgElement.src = question_imgass; //はてなマーク
      imgElement.classList.remove("ok");
    }
    //bingoリストにあるかどうか確認（全ての詳細を見れるようにするためこの機能は削除）
    
    //if (colnum.includes((page_add+i).toString())){
      //imgElement.classList.add("ok"); //動き
      //divSquare[i-1].classList.add("ok"); //ますの色
    //}else{
      //imgElement.classList.remove("ok");
      //divSquare[i-1].classList.remove("ok");
    //}
  }
}




