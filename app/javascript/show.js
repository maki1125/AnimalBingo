//console.log("collection/show")
//console.log(page)


//地図の上のメッセージ
let hedingPlace = document.querySelector('.place p');// テキストを表示する要素を取得('place-text');// テキストを表示する要素を取得
if (adresses.length==0){
hedingPlace.textContent=`まだ情報がないです。ごめんね。`;
};
//let adresses;

async function initMap() {
  let map;
  let marker = []; //マーカーを格納する配列
  let geocoder;
  let infoWindow = []; //吹き出しを格納する配列
   
  //import
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  
  //map
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    mapId: "DEMO_MAP_ID",
  });
  map.setCenter({lat: 39, lng: 137}); //mapの中身を設定

  //geocoderの準備(座標算出のライブラリ)
  geocoder = new google.maps.Geocoder();

  // マーカーをクリックしたときのイベント登録
  const markerEvent = (i) => {
  marker[i].addListener('click', () => {
    for (const j in marker) {
      //マーカーをクリックしたときに他の情報ウィンドウを閉じる
      infoWindow[j].close(map, marker[j]);
    }
    //クリックされたマーカーの吹き出し（情報ウィンドウ）を表示
    infoWindow[i].open(map, marker[i]);
    });
  }
  
    // 各住所に対してループを行う
    for (let i=0; i<adresses.length; i++){
    // ジオコーディングを実行
    geocoder.geocode({ 'address': adresses[i] }, function(results, status) {
      if (status == 'OK') {
        // ジオコーディングが成功した場合
        //console.log("OK");
        //map.setCenter(results[0].geometry.location);
            marker[i] = new google.maps.marker.AdvancedMarkerElement({
            map: map,
            position: results[0].geometry.location,
        });

        //吹き出し（情報ウィンドウ）作成
        infoWindow[i] = new google.maps.InfoWindow({
          position: results[0].geometry.location,
          content: `<div class="custom-info">
            <div class="custom-info-item name">
            ${names[i]}
            </div>
            <div class="custom-info-item google-map">
            <a href="${urls[i]}" target="_blank">詳細</a>
            </div>
        </div>`,
          pixelOffset: new google.maps.Size(0, 0)
        })
        // 各マーカーにクリックイベントを追加
        markerEvent(i);

      } else {
        // ジオコーディングが失敗した場合
        //console.log("NG");
        alert('該当する結果がありませんでした：' + status);
      }
    }) 
  };
}

//コメント投稿後、削除後のエラー「The Google Maps JavaScript API only loads once. Ignoring」対策。
document.addEventListener('turbo:load', function() {
  initMap();
});

// 戻るボタンの要素を取得・イベント追加
var backButton = document.getElementById('back');
backButton.addEventListener('click', function() {
    var url =  `/collections?page=${page}&pic=${pic_mode}`;
    window.location.href = url;// リダイレクト
});
var backButton2 = document.getElementById('back2');
backButton2.addEventListener('click', function() {
    var url =  `/collections?page=${page}&pic=${pic_mode}`;
    window.location.href = url;// リダイレクト
});

