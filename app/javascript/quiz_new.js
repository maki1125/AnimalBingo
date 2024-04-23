document.addEventListener("DOMContentLoaded", function() {
  //絵柄の選択の処理
  //現在選択中のものを表示する
  let nowpic = document.getElementById(`radio${parseInt(quiz_select)}`); //現在のモード取得　
  let nowpiclabel = document.querySelector(`label[for='radio${parseInt(quiz_select)}']`); //現在のモード取得　
  let pics = document.querySelectorAll(".quiz_select");
  nowpic.checked = true;
  nowpiclabel.classList.add("selected");
  
  pics.forEach(function(one) {//クリックしたときにselectedにする
    one.addEventListener("click", function() {
      // 選択されたボタンを強調表示
      pics.forEach(function(rb) {
        rb.classList.remove("selected");
      });
      one.classList.add("selected");
    });
  });
});

