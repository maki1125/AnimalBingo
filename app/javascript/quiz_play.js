console.log("pictureName",pictureName)
//console.log(quiz_select);
//console.log(img_ass);
//console.log(pictureName);
let question_no=1; //現在の問題番号。1~5まで。
let random; //正解の番号。0,1,2
let questionNoElement = document.querySelector('.question_no');
let answerElement = document.querySelector('.answer');
let okNumElement = document.querySelector('.ok_num');
let ok_num = 0; //正解した数

//初期処理
answerElement.textContent="わかるかな？";
okNumElement.textContent="0問";
questionNo()
quiz();
updateImages(); // 問題1の画像を更新
radioselect() //ラジオボタンの処理の関数

// 問題番号の処理の関数
function questionNo(){
  if (question_no==5){
    questionNoElement.textContent = "５問目!最終問題!";
    questionNoElement.style.color = "blue";
  }else{
  questionNoElement.textContent = `${question_no}問目/５問`;
  questionNoElement.style.color = "black";
  }
}

//問題文の処理の関数
function quiz(){
    random = Math.floor(Math.random() * 3);//0~2の範囲の整数を生成。
    let quizElement = document.querySelector('.name');

    quizElement.textContent = pictureName[random + (question_no - 1) * 3];
    //console.log(pictureName[random],random);
}

// 選択絵柄の表示
function updateImages() {
  answerElement.textContent="わかるかな？";
  answerElement.style.color = "black"; // 赤色に設定
  for (let i = 0; i < 3; i++) {
    // ラベル要素を取得
    let label = document.querySelector(`label[for="radioButton${i + 1}"]`);
    // img要素を取得する
    const imgElement = document.getElementById(`img${i+1}`);
    // src属性を変更する
    imgElement.src = img_ass[i + (question_no - 1) * 3];
    console.log("srcパス",i + (question_no - 1));
  }
}

//ラジオボタンの処理の関数
function radioselect(){
  let radioButtons = document.querySelectorAll('input[type="radio"]');// ラジオボタンの要素を取得
  radioButtons.forEach((radioButton) => {// ラジオボタンの変更イベントを監視
    radioButton.addEventListener('change', function() {
      const labels = document.querySelectorAll("label");
      labels.forEach((label) => {
        label.classList.remove('gray');//まずはgrayを消去
      });
      // 選択されたラジオボタンに対応するlabelにクラスを追加
      const selectedLabel = document.querySelector(`label[for="${radioButton.id}"]`);
      selectedLabel.classList.add('gray');
      
    });
  });
}

//ラベルの背景色をクリア＋ラジオボタンの選択解除する関数
function labelBackgroundColorClear(){
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.classList.remove('gray');//まずはgrayを消去
      label.classList.remove('ok');
      //label.style.backgroundColor = "white";
    });
    const radioButtons = document.querySelectorAll('input[type="radio"]'); // 全てのラジオボタンを取得
    radioButtons.forEach(button => {
    button.checked = false; // 選択を解除
  });
  }

//決定ボタン後の処理
const decisionButton = document.querySelector('.btn');// 決定ボタンを取得
decisionButton.addEventListener('click', function() {
    if(decisionButton.textContent == "決定"){
      // ラジオボタンの要素を取得
      const radioButtons = document.querySelectorAll('input[name="quiz"]:checked');
      let selectedValue;
      
      // ラジオボタンが選択されているかを確認
      if (radioButtons.length > 0) {
          // 選択されているラジオボタンの値を取得
          selectedValue = radioButtons[0].value;
          console.log('選択された値:', selectedValue,radioButtons);
      } else {
          console.log('ラジオボタンが選択されていません。');
      }

      //答え合わせ
      if (selectedValue==random){
        answerElement.textContent = "◯ 正解です";
        answerElement.style.color = "red"; // 赤色に設定
        ok_num += 1;
        okNumElement.textContent = `${ok_num}問`;//正解数の表示変更
      }else{
        answerElement.textContent = "× 不正解です";
        answerElement.style.color = "blue"; // 赤色に設定
      }
      const label = document.querySelector(`label.label${random}`);
      label.classList.add('ok');

      //ボタンテキストの変更
      if(question_no<5){
      decisionButton.textContent = "次の問題へ行く";
      decisionButton.style.backgroundColor = 'blue'; // 例えば赤色に変更
      console.log("decisionButton",decisionButton);
      }else{
        decisionButton.textContent = "結果を見る";
        decisionButton.style.backgroundColor = 'green'; // 例えば赤色に変更
      } 
      //問題番号のテキスト変更
      if (question_no==5){
      questionNoElement.textContent = "お疲れ〜!結果を見てみよう!";
      }
  }else{
  if (decisionButton.textContent == "次の問題へ行く"){
    question_no += 1;
    console.log("question_no", question_no);
    updateImages(); // 問題1の画像を更新
    labelBackgroundColorClear(); //ラベルの背景色をクリア
    questionNo(); //問題番号の表示
    quiz(); //クイズの表示
    radioselect(); //radioボタンの設定。
    decisionButton.textContent = "決定"; 
    decisionButton.style.backgroundColor = 'orange'; // 例えば赤色に変更
    answerElement.textContent = "わかるかな？";
  }else{
    if (decisionButton.textContent == "結果を見る"){
      
      console.log("結果を見る")
      console.log('hoge=' + encodeURIComponent(ok_num))
      var xhr = new XMLHttpRequest();
      xhr.open("POST", '/quizzes/save', false); // 第3引数をtrueにすると非同期通信になります
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('hoge=' + encodeURIComponent(ok_num));
      
      //if (xhr.status === 200) {
        //console.log(xhr.responseText);
      //} else {
        //console.error('Request failed: ' + xhr.status);
      //}
      //非同期通信だとsaveでデータベースが変更される前にsave2で値を取得してしまう。
      //$.ajax({
        //url: '/quizzes/save',// 実行したいactionへのpath
        ///type: 'POST',// GET, POST, PUT, DELETEなどを設定します。
        //data: {// urlにつけるパラメータを指定します。                 
            //hoge: ok_num// Rails からは parmas[:hoge] で受け取れます。 
        //},
        //})
        //$.ajax({//window.location.hrefではsave2アクション実行前にページが表示されてしまうのでここで　save2のアクション実行。
          //url: '/quizzes/save2',// 実行したいactionへのpath
          //type: 'GET',// GET, POST, PUT, DELETEなどを設定します。
          //})
        window.location.href = '/quizzes/save2'; //saveのページ遷移できなかったため、save2をgetルーティングで作成始画面遷移。これはgetのみ使用できる。postは無理。
  }
}
}
});





  
