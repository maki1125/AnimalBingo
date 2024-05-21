const MASS = mass; //一片のマスの数
const squareWidth = 100 / MASS; // カラム数に基づいたマスの幅
let squareIdCounter = 0; //マスのID用のカウンターを初期化。2枚のカード共通で0~mass*mass*2-1のIDをつけるための変数。
let outer = document.getElementById('outer'); //htmlに設定。1枚目のカードの要素。
let outer2 = document.getElementById('outer2'); //htmlに設定。2枚目のカードの要素。
let cardId; //クリックしたビンゴますのID ID番号-動物の名前
let cardId2; //クリックしたビンゴますのID ID番号-動物の名前。2枚目のカード用。
let clickName; //クリックした動物の名前
let clickIndex; //クリックしたビンゴマスのID番号
let bingoAchieved = false; //ビンゴ成立か判定のフラグ
let bingoImages = [];// ビンゴした画像を格納する配列を定義
let del=1; //ルーレット用動物一覧の削除した履歴。0はまだ削除していないの意味。ルーレットを回すときに0にする。
let ruretName; //ルーレットででた動物の名前
let random; //ルーレットのところで生成して、ビンゴカードのところでも使用する。
let images = imagePathsArray; //1枚目のカードの画像パス一覧。最後の画像はルーレット用なので除く。
let images2 = imagePathsArray2; //2枚目のカードの画像パス一覧。
let ruret_names = [...new Set([...names, ...names2])]; //カード１と２の重複を除いて結合
let ruret_images = [...new Set([...images, ...images2])]; //カード１と２の重複を除いて結合
let text; //カードの上の文字
let ruretstaImg = imagePathsArray[MASS * MASS];//ルーレットの初期画像
let ruretstaName = names[MASS*MASS]//ルーレットの初期画像の名前
let bingoFlag = 0; //引き分けかどうかの判断のために使用。
images = images.splice(0,MASS*MASS); //最後の画像はルーレット用なので処理後除く。
names = names.splice(0,MASS*MASS);//最後の画像はルーレット用なので処理後除く。

// ビンゴカード作成
function createBingoCard(outer, images,cardId, names){
    for(let i = 0; i < MASS * MASS; i++){// 画像をマス上に表示
        let divSquare = document.createElement('div');//セルのdiv要素作成。
        divSquare.classList.add('square'); //作成したセルにsquareクラスを追加。
        let div = document.createElement('div');//セル内に画像を配置するためのdiv要素作成。
        let img = document.createElement('img');//img要素の作成。
        img.src = images[i]; // 画像のパスを設定.htmlで変数作成。
        div.appendChild(img);//div要素の中にimg要素を追加。
        divSquare.appendChild(div);
        outer.appendChild(divSquare);
        divSquare.setAttribute('id', `${squareIdCounter}-${names[i]}`); //ID付与
        squareIdCounter++; //マスのID用のカウンターをインクリメント。2枚のカード共通。
        divSquare.addEventListener('click', function(event) {// .square 要素に対して直接クリックイベントを設定
            cardId = event.currentTarget.id; // クリックされた要素のIDを取得
            clickIndex = cardId.substr(0,cardId.indexOf("-")); //クリックしたマスのID取得。
            clickName = cardId.substr(cardId.indexOf("-")+1,10); //クリックしたマスのどうぶつ名取得。
            //ルーレットの動物と一致しているか確認
            if (ruretName==clickName){ //ルーレットの動物とクリックした動物の比較
                text= "正解！";// テキストを変更
                divSquare.classList.add('gray'); //色をつける
                divSquare.onclick = null; //一度正解したマスはその後クリックイベント起こらないようにする。
                if (del==0){ //1回だけ削除するため.
                    ruret_names.splice(random,1) //クリックされたものは、ルーレットの一覧から削除していく。
                    ruret_images.splice(random,1) //クリックされたものは、ルーレットの一覧から削除していく。
                    del=1;
                    //num -= 1; //カードの中のまだクリックしていないマス数。
                };
                checkBingo(); //ビンゴかチェックする。
                if (bingoAchieved) {
                    if(bingoFlag==1){
                        text = "引き分け!!"
                        headingElement.textContent = text;// テキストを変更
                        headingElement2.textContent = text;// テキストを変更
                    }else{
                        text = "ビンゴ!!君の勝ち!";// テキストを変更
                        bingoFlag= 1;
                        //console.log("一人勝ち");
                    }
                    animateBingoImages(); //動物を回転させる。
                    // ボタン要素を取得する
                    const button = document.getElementById('button');
                    button.textContent = "また遊ぶ";// ボタンのテキストを変更する
                    button.style.backgroundColor = "orange";
                }else{ //まだビンゴにならない時にうんうんの動作
                    $(div).animate({top: '+=20'},100);//上下に振るわせる。
                    $(div).animate({top: '-=40'},100);
                    $(div).animate({top: '+=40'},100);
                    $(div).animate({top: '-=40'},100);
                    $(div).animate({top: '+=20'},100);
                };
            }else{
                text = "違うよ、、、";// テキストを変更
                $(div).animate({left: '+=20'},100);//左右に振るわせる。
                $(div).animate({left: '-=40'},100);
                $(div).animate({left: '+=40'},100);
                $(div).animate({left: '-=40'},100);
                $(div).animate({left: '+=20'},100);
            };
            //2枚のうちどちらのカードのクリックか判断し、ビンゴカード上のテキストを変更する。
            if (clickIndex<mass*mass){//一つのカードのcell要素にするための処理
                headingElement.textContent = text;// テキストを変更
            }else{
                headingElement2.textContent = text;// テキストを変更
            };
        });
    };
};

//ビンゴカード作成
createBingoCard(outer, images, cardId, names); //1枚目のビンゴカード
createBingoCard(outer2, images2, cardId2, names2); //2枚目のビンゴカード

//ビンゴカードの並びの設定
$('.square').css('flex', `0 0 ${squareWidth}%`);

//ビンゴカードの上のメッセージ
let headingElement = document.querySelector('.bingo-heading h2');// テキストを表示する要素を取得
let headingElement2 = document.querySelector('.bingo-heading2 h2');// テキストを表示する要素を取得

//ルーレットの上のメッセージ
let hedingRuret = document.querySelector('.ruret_text h2');// テキストを表示する要素を取得

//ルーレットの最初の画像の設定.imagesの1枚目のカードに使用しない最後の画像を使用する。
function changeImageSource() {
    let image = document.getElementById('result'); //ルーレットの画像要素を取得
    image.src = question_imgass;//ruretstaImg; // 1枚目のビンゴカードの画像一覧のカードに使用しない最後の一枚をルーレット初期画像とする。
    hedingRuret.textContent = "";//ruretstaName;// テキストを変更
};
//console.log(names);

// ページが読み込まれたときに画像のsrc属性を変更する
window.onload = function() {
    changeImageSource();
};

//ルーレットの処理
rouletteProcessing();
function rouletteProcessing() {
    let timer;
    // START・STOPボタンクリックのイベント
    document.getElementById("button").addEventListener("click", function () {
        del = 0; //削除の履歴をクリアする。
        let text1 = ""; //1枚目のカードの上の文字
        let text2 = ""; //2枚目のカードの上の文字
        //また遊ぶ
        if (this.textContent == "また遊ぶ") {
            window.location.href = "/bingo";
        };
        // START
        if (this.textContent == "START") {
            this.textContent = "STOP";// ボタンのテキストを"STOP"に変更
            this.style.backgroundColor = "red";
            text = "stopボタンを押してね"; // テキストを変更
            // ルーレットタイマーを設定
            timer = setInterval(function () {
                random = Math.floor(Math.random() * ruret_images.length);//0~images.length-1の範囲の整数を生成。
                document.getElementById("result").setAttribute("src", ruret_images[random]);
                hedingRuret.textContent = ruret_names[random]; // ルーレット上のテキストを変更
            }, 50);
            headingElement.textContent = text;// カード１上のテキストを変更
            headingElement2.textContent = text;// カード２上のテキストを変更
        // STOP
        } else {
            this.textContent = "START";// ボタンのテキストを"START"に変更
            this.style.backgroundColor = "green"; 
            clearInterval(timer); // ルーレットタイマーを停止
            ruretName = ruret_names[random]; //ルーレットででた動物の名前
            //カード1上のテキストの処理
            let aru = names.includes(ruretName); //カードの中に、ルーレットの動物がいるか確認。namesの最後の要素はルーレット用のため除く。
            if (aru) {
                text1 = "どこかな？"; // テキストを変更
            } else {
                text1 = "いないね、、、"; // テキストを変更
            }
            //カード2上のテキストの処理
            let aru2 = names2.includes(ruretName); //カードの中に、ルーレットの動物がいるか確認。
            if (aru2) {
                text2 = "どこかな？"; // テキストを変更
            } else {
                text2 = "いないね、、、"; // テキストを変更
            }
            hedingRuret.textContent = ruret_names[random]; // ルーレット上のテキストを変更
            headingElement.textContent = text1;// カード１上のテキストを変更
            headingElement2.textContent = text2;// カード２上のテキストを変更
        };
    });
};

//ビンゴか確認する
function checkBingo() {
    bingoImages = []; //処理の前に空にしておく
    bingoAchieved = false;
    let x = clickIndex%MASS; //クリックした列番号　0,1,2
    let y; //クリックしたマスの行の番号　0,1,2
    if (clickIndex<mass*mass){//どちらのカードか確認
        y = Math.floor(clickIndex/MASS) 
    }else{
        y = Math.floor(clickIndex/MASS-MASS) 
    };
    //列の確認
    let bingo_count = 0;
    let columnSelector = `.square:nth-child(${MASS}n+${x+1})`; // クリックした列の取得
    let cells = document.querySelectorAll(columnSelector);// 指定の列のマスの要素を取得。カード2枚分の要素が取得される。
    if (clickIndex<mass*mass){//どちらのカードか確認
        cells = Array.from(cells).splice(0,mass) //カード１のセル要素の取得
    }else{
        cells = Array.from(cells).splice(mass,mass) //カード２のセル要素の取得
    }
    //セルの要素の分だけ処理
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells); //ビンゴ配列にcellsを入れる。
                break;
            };
        };
    };

    //行の確認
    bingo_count = 0;
    columnSelector = `.square:nth-child(n+${y*MASS+1}):nth-child(-n+${y*MASS+MASS})`; // クリックした列の取得
    cells = document.querySelectorAll(columnSelector);// 指定の列のマスの要素を取得。カード2枚分の要素が取得される。
    if (clickIndex<mass*mass){//どちらのカードか確認
        cells = Array.from(cells).splice(0,mass)
    }else{
        cells = Array.from(cells).splice(mass,mass)
    }
    //セルの要素の分だけ処理
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells);
                break;
            };
        };
    };

    //左斜め
    bingo_count = 0;
    columnSelector = `.square:nth-child(${MASS + 1}n + 1)`;
    cells = document.querySelectorAll(columnSelector);
    if (clickIndex<mass*mass){//どちらのカードか確認
        cells = Array.from(cells).splice(0,mass)
    }else{
        cells = Array.from(cells).splice(mass,mass)
    }
    //セルの要素の分だけ処理
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells);
                break;
            };
        };
    };

    //右斜め
    bingo_count = 0;
    columnSelector = `.square:nth-child(${MASS - 1}n + ${MASS})`;
    cells = document.querySelectorAll(columnSelector);
    if (clickIndex<mass*mass){//どちらのカードか確認
        cells = Array.from(cells).splice(0,mass)
    }else{
        cells = Array.from(cells).splice(mass+1,mass) //右斜は右下のますもcellsに入ってくるため、それを除外するためmass+1としている。
    }
    //セルの要素の分だけ処理
    for (let i = 0; i < MASS; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(Array.from(cells).slice(0,MASS)); //4つ目の要素を除くため。
                break;
            };
        };
    };
};

//ビンゴしたときに回転する動作
function animateBingoImages() {
    if (bingoAchieved) {
        let bingo_list = []; //ビンゴした動物の名前を入れるリスト
        bingoImages.forEach(nodeList => {
            nodeList.forEach(element => {
                element.style.backgroundColor = "#30B7FF"; //背景色を濃い水色にする
                bingo_list.push(element.id.substr(element.id.indexOf("-")+1,10)); //動物の名前をリストに追加
                bingo_list = Array.from(new Set(bingo_list)); //重複を除く。
                let animalImg = element.querySelector('img'); // 動物のimg要素を取得
                animalImg.animate(
                    [// 途中の状態を表す配列
                        { transform: 'scale(2) rotate(0deg)' }, // 開始時の状態（0度）
                        { transform: 'scale(1) rotate(360deg)' }, // 終了時の状態（360度）
                    ], 
                    {// タイミングに関する設定
                        delay: 500, //上下動作の完了を待つ
                        duration: 2000, // 再生時間（1000ミリ秒）  
                    },
                );
            });
        //bingoしたデータをコレクションに送る
        $.ajax({
            url: '/collections/save',// コレクションコントローラのsaveアクションを実行
            type: 'POST',// GET, POST, PUT, DELETEなどを設定します。
            data: {// urlにつけるパラメータを指定します。                 
                hoge: bingo_list// Rails からは parmas[:hoge] で受け取れます。
                },
            });
        });
    };
};
