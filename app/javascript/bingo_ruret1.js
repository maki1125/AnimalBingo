const MASS = mass;
const squareWidth = 100 / MASS; // カラム数に基づいたマスの幅
let squareIdCounter = 0; // マスのID用のカウンターを初期化
let outer = document.getElementById('outer'); //htmlに設定
let cardId; //クリックしたビンゴますのID ID番号-動物の名前
let clickName; //クリックした動物の名前
let clickIndex; //クリックしたビンゴマスのID番号
let bingoAchieved = false; //ビンゴ成立か判定のフラグ
let bingoImages = [];// ビンゴした画像を格納する配列を定義
let del=1; //ルーレット用動物一覧の削除した履歴。0はまだ削除していないの意味。
let num=MASS*MASS; //カードの中のまだクリックしていないマス数。
let name_ruret; //カードの処理でも使いたいためここで宣言。
let images = imagePathsArray;
let random; //ビンゴカードのところで使用する。
let ruret_names = names; //
let ruret_images = images; //

//console.log(images);
//console.log(images2)


// ビンゴカード作成
function createBingoCard(outer, images,cardId, names){
    for(let i = 0; i < MASS * MASS; i++){// 画像をマス上に表示
        let divSquare = document.createElement('div');//セルのdiv要素作成。
        let div = document.createElement('div');//セル内に画像を配置するためのdiv要素作成。
        let img = document.createElement('img');//img要素の作成。
        img.src = images[i]; // 画像のパスを設定.htmlで変数作成。
        
        div.appendChild(img);//div要素の中にimg要素を追加。
        divSquare.appendChild(div)
        outer.appendChild(divSquare);
        
        divSquare.classList.add('square'); //作成したセルにsquareクラスを追加。
        divSquare.setAttribute('id', `${squareIdCounter}-${names[i]}`);
        //console.log(`${squareIdCounter}-${names[i]}`);
        squareIdCounter++; // カウンターをインクリメント
        divSquare.addEventListener('click', function(event) {// .square 要素に対して直接クリックイベントを設定
            cardId = event.currentTarget.id; // クリックされた要素のIDを取得
            const imgsrc = event.currentTarget.src; // クリックされた要素のIDを取得
            clickIndex = cardId.substr(0,cardId.indexOf("-")); //クリックしたマスのID取得。
            clickName = cardId.substr(cardId.indexOf("-")+1,10); //クリックしたマスのどうぶつ名取得。
            //var x = index%MASS;
            //var y = Math.floor(index/MASS);
            //ルーレットの動物と一致しているか確認
            if (name_ruret==clickName){ //動物名だけ抜き出す。
                headingElement.textContent = "正解！";// テキストを変更
                divSquare.classList.add('gray'); 
                divSquare.onclick = null;//色をつける
                if (del==0){ //1回だけ削除するため
                    ruret_names.splice(random,1) //クリックされたものは、ルーレットの一覧から削除していく。
                    ruret_images.splice(random,1) //クリックされたものは、ルーレットの一覧から削除していく。
                    del=1;
                    num -= 1;
                }
                checkBingo(); //ビンゴかチェックする。
                if (bingoAchieved) {
                    headingElement.textContent = "ビンゴ！！";// テキストを変更
                    animateBingoImages(); //動物を回転させる。
                    // ボタン要素を取得する
                    const button = document.getElementById('button'); // もしくは適切なセレクタでquerySelectorを使用して取得する
                    button.textContent = "また遊ぶ";// ボタンのテキストを変更する
                    button.style.backgroundColor = "orange";
                }else{ //まだビンゴにならない時にうんうんの動作
                    $(div).animate({top: '+=20'},100);//左右に振るわせる。
                    $(div).animate({top: '-=40'},100);
                    $(div).animate({top: '+=40'},100);
                    $(div).animate({top: '-=40'},100);
                    $(div).animate({top: '+=20'},100);
                };
            }else{
                headingElement.textContent = "違うよ、、、";// テキストを変更
                $(div).animate({left: '+=20'},100);//左右に振るわせる。
                $(div).animate({left: '-=40'},100);
                $(div).animate({left: '+=40'},100);
                $(div).animate({left: '-=40'},100);
                $(div).animate({left: '+=20'},100);
            }
        });
    }
};

createBingoCard(outer, images, cardId, names);

//ビンゴカードの並びの設定
$('.square').css('flex', `0 0 ${squareWidth}%`);

//ビンゴカードの上のメッセージ
const headingElement = document.querySelector('.bingo-heading h2');// テキストを表示する要素を取得
headingElement.textContent = "STARTボタンを押してね";// テキストを変更

//ルーレットの上のメッセージ
const hedingRuret = document.querySelector('.ruret_text h2');// テキストを表示する要素を取得

//ルーレットの設定
//ルーレットの最初の画像の設定
function changeImageSource() {
    var image = document.getElementById('result');
    image.src = imagePathsArray[MASS * MASS]; // 新しい画像のファイルパスを設定
    hedingRuret.textContent = names[MASS * MASS];// テキストを変更
}
// ページが読み込まれたときに画像のsrc属性を変更する
window.onload = function() {
    changeImageSource();
};

//ルーレットの処理
rouletteProcessing();
function rouletteProcessing() {
    var timer;


    //var random;
    // START・STOPボタンクリックのイベント
    document.getElementById("button").addEventListener("click", function () {
        del = 0; //削除の履歴をクリアする。
        //また遊ぶ
        if (this.textContent == "また遊ぶ") {
            window.location.href = "/bingo";
        };
        // START
        if (this.textContent == "START") {
            // ボタンのテキストを"STOP"に変更
            this.textContent = "STOP";
            this.style.backgroundColor = "red";
            headingElement.textContent = "stopボタンを押してね"; // テキストを変更
            // ルーレットタイマーを設定
            timer = setInterval(function () {
                random = Math.floor(Math.random() * ruret_images.length);//0~images.length-1の範囲の整数を生成。
                document.getElementById("result").setAttribute("src", ruret_images[random]);
                hedingRuret.textContent = ruret_names[random]; // テキストを変更
            }, 50);
            // STOP
        } else {
            this.textContent = "START";
            this.style.backgroundColor = "green"; // ボタンのテキストを"START"に変更
            clearInterval(timer); // ルーレットタイマーを停止
            var result = ruret_images[random]; // 停止時の数字を結果に反映
            name_ruret = ruret_names[random]; //ルーレットででた動物の名前
            //console.log("ルーレット内処理result",result);
            //console.log("ルーレット内処理name_ruret",name_ruret);
            var aru = names.slice(0, num).includes(name_ruret); //カードの中に、ルーレットの動物がいるか確認。
            if (aru) {
                headingElement.textContent = "どこかな？"; // テキストを変更
            } else {
                headingElement.textContent = "いないね、、、"; // テキストを変更
            }
            hedingRuret.textContent = ruret_names[random]; // テキストを変更
        }
    });
}

//ビンゴか確認する
function checkBingo() {
    bingoImages = []
    bingoAchieved = false;
    var x = clickIndex%MASS //クリックした列番号　0,1,2
    var y = Math.floor(clickIndex/MASS) //クリックしたマスの行の番号　0,1,2
    //console.log(x,y)

    //列の確認
    let bingo_count = 0;
    var columnSelector = `.square:nth-child(${MASS}n+${x+1})`; // クリックした列の取得
    var cells = document.querySelectorAll(columnSelector);// 指定の列のマスの要素を取得。カード2枚分の要素が取得される。
    //console.log("cells",cells)
    //console.log(index)

    //console.log("処理後cells",cells)
    //const numberOfCells = cells.length;//要素の数を取得。
    //console.log(numberOfCells);
    for (let i = 0; i < cells.length; i++) {
        // 各セルに対する処理を記述する
        //console.log(cells[i]); // 例: 各セルの内容をコンソールに出力する
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells);
                break;
            };
        };
    };

    //行の確認
    bingo_count = 0;
    columnSelector = `.square:nth-child(n+${y*MASS+1}):nth-child(-n+${y*MASS+MASS})`; // クリックした列の取得
    cells = document.querySelectorAll(columnSelector);// 指定の列のマスの要素を取得

    //console.log("処理後cells",cells)
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells);
                //squaresInColumn1 = cells;
                break;
            };
        };
    };

    //左斜め
    bingo_count = 0;
    cells = document.querySelectorAll(`.square:nth-child(${MASS + 1}n + 1)`);//行の要素を取得。
    //console.log("処理前のcells",cells);

    //console.log("処理後cells",cells)
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(cells);
                //squaresInColumn1 = cells;
                break;
            };
        };
    };

    //右斜め
    bingo_count = 0;
    cells = document.querySelectorAll(`.square:nth-child(${MASS - 1}n + ${MASS})`);//行の要素を取得。
    //console.log("処理前",cells);

    //console.log("処理後",cells);
    for (let i = 0; i < MASS; i++) {
        if (cells[i].classList.contains('gray')) {
            bingo_count += 1;
            if (bingo_count==MASS){
                bingoAchieved = true; // ビンゴ成立フラグを立てる
                bingoImages.push(Array.from(cells).slice(0,MASS)); //4つ目の要素を除くため。
                //squaresInColumn1 = cells;
                break;
            };
        };
    };
    //console.log(bingo_count);
    //console.log("bingoAchieved",bingoAchieved);
    //console.log("bingoImages",bingoImages);
};

function animateBingoImages() {
    if (bingoAchieved) {
        let bingo_list = [];
        //console.log(bingoImages);
        bingoImages.forEach(nodeList => {
            //console.log("nodeList",nodeList)
            nodeList.forEach(element => {
                //console.log("element",element);
                element.style.backgroundColor = "#30B7FF";
                //console.log(element.id.substr(cardId.indexOf("-")+1,10));
                bingo_list.push(element.id.substr(element.id.indexOf("-")+1,10));
                bingo_list = Array.from(new Set(bingo_list)); //重複を除く。
                //console.log("bingo_list",bingo_list);
                let animalImg = element.querySelector('img'); // 動物のimg要素を取得
                animalImg.animate(
                    // 途中の状態を表す配列
                    [
                        { transform: 'scale(2) rotate(0deg)' }, // 開始時の状態（0度）
                        { transform: 'scale(1) rotate(360deg)' }, // 終了時の状態（360度）
                    ], 
                    // タイミングに関する設定
                    {
                        delay: 500,
                        duration: 2000, // 再生時間（1000ミリ秒）  
                    },
                );
            });
        //bingoしたデータをコレクションに送る
        $.ajax({
            url: '/collections/save',// 実行したいactionへのpath
            type: 'POST',// GET, POST, PUT, DELETEなどを設定します。
            data: {// urlにつけるパラメータを指定します。                 
                hoge: bingo_list// Rails からは parmas[:hoge] で受け取れます。
                
            },
            })
        });
    }
}
