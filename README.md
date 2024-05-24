# どうぶつビンゴ

サービスURL:[https://animalbingo2-34d68e449c22.herokuapp.com/](https://animalbingo2-34d68e449c22.herokuapp.com/)

## サービス概要
未就学児の子ども向けの動物のビンゴゲームです。  
ビンゴカードには、数字ではなく動物の絵が描かれています。  
ビンゴの他にクイズや動画があり知育につがる内容です。

## このサービスへの思い・作りたい理由
子供の保育園で紙に動物の絵をかきビンゴをやっていることを知り、  
それをアプリにして一緒に遊べたら楽しそうだと思ったからです。

## ユーザー層について
未就学児の子どもとその親。

## サービスの利用イメージ 
* 数字ではなく動物のイラストであるため小さな子供でも楽しんでビンゴゲームができます。
* ビンゴだけでなくクイズでも遊べます。動物の名前のクイズです。
* コレクション機能により動物を集めていくことができます。
* 動物の動画や実際に見れる動物園の情報があるので動物について学ぶことができます。

## ユーザーの獲得について
ゲストログイン機能によりお試しで使うことができアプリ使用のハードルを下げました。  
また、SNSログインを導入することでログインのハードルを下げることでユーザー獲得を目指します。

## サービスの差別化ポイント・推しポイント 
* 動物ビンゴの紙は売っているが、アプリは存在しません。アプリで遊べることで手軽に遊ぶことができます。
* モード選択の機能により、ビンゴゲームのバリエーションが多く、飽きずに遊ぶことができます。
　例えば、対決ができます。絵柄は動物・魚・恐竜から選択できます。ビンゴのマスを9・16・25から選択できます。
* ビンゴ以外にクイズ機能やコレクション機能があり飽きずに長く遊べます。
* 動物の動画や実際にその動物が見れる動物園の情報があるので動物について学ぶことができます。


## 機能一覧
* ビンゴ機能
* コレクション機能
* モード選択機能
* クイズ機能
* ログイン機能
* お知らせ機能
* ご意見・ご感想機能

## 機能解説
<table>
  <th width="50%" style="background-color: #ffffe0; text-align: center;">トップページ</th>
  <th width="100%"  style="background-color: #ffffe0; text-align: center;">ビンゴ機能</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/f41a59e6d5360f02b7c5d873ed9cc6e4.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/10bb9f20fc35539d60b7a1aa97339211.jpg" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>小さな子供が目を引くように鳥とウサギにCSSを使用して動きをつけました。遊び方には動画を埋め込みわかりやすくしました。ナビゲーションバーのリンクは、画面サイズが小さい時はトグルボタンに変わるようにしてスマホ表示に対応させました。</td>
      <td>小さな子供でも遊べるように数字ではなく、かわいい動物のイラストを使用しました。スマホ表示にも対応しており、画面サイズが小さい時はカードとルーレットが縦に並びます。ビンゴカードを画面サイズに応じてレスポンシブに表示させるため、マスの要素に擬似要素を作成してサイズを%で指定することで実現しました。</td>
    </tr>
</table>
<table>
  <th width="100% " colspan="2" style="background-color: #ffffe0; text-align: center;" >モード選択</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/654c18dadb7d4b61d6f3318a76aab3cc.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/e458d2932bd25d743a72f4251212ead6.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>遊び方、絵柄、マスの数を選択できるようにして、遊び方にバリエーションを持たせて飽きずに遊べるように工夫をしました。form_withを使用してモードテーブルにデータを保存するようにしました。各項目は必ず1つは選択されるようにラジオボタンを使用し、見た目をボタンのようにするためにラジオボタンに紐づけたラベルを表示させることで見た目を実現しました。</td>
      <td>勝負をすることができます。カード1枚の時とは異なる処理があるためJavaScriptのファイルを分けています。相手のカードの状態を確認しつつ、勝負の結果をカード上のテキストに表示されるようにしています。</td>
    </tr>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/da3c13959676afe72d4f5f1475dcde48.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/f6225851f42f028b99c4cf841d25db09.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>絵柄には魚を選択することもできます。モードテーブルから現在の選択モードの情報を取得してそれにより必要な画像情報を取得してカードを表示します。</td>
      <td>絵柄には恐竜を選択することもできます。</td>
    </tr>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/e9e904dcc2be1690ec636567b0ee81ea.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/5c4f7e58881390bd70dee820f702e0f2.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>マスの数は4*4マスを選択することもできます。カードのマスの表示にflex-wrapを使用して指定の数で折り返して表示させることにより動的にカードマスを変更させて表示できるようにしています。</td>
      <td>マスの数は5*5マスを選択することもできます。</td>
    </tr>
</table>
<table>
  <th width="100% " colspan="2" style="background-color: #ffffe0; text-align: center;" >クイズ機能</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/1dbf21a7f14979c2c87916d0d0385d50.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/60a288def5e18f4e8857bba2c0dcdc21.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>動物、魚、恐竜から選択することができます。モード選択の機能とほぼ同じ感じで実装をしています。</td>
      <td>動物の名前が表示されるので、動物の絵を選択します。JavaScriptを使用して機能を実現させています。</td>
    </tr>
</table>
<table>
  <th width="100% " colspan="2" style="background-color: #ffffe0; text-align: center;" >コレクション機能</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/028596221888120dc3b80170c9245010.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/c2f60da41b1f0e2b1e178c391e446961.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>100種類分の動物をコレクションできます。１ページに20匹表示され５ページあります。上のボタン（どうぶつ・さかな・きょうりゅう）や下のボタン（１・２・３・４・５）により一覧の内容を変化させるのはJavaScriptを使用して実現させています。</td>
      <td>動物をクリックすると詳細ページに飛び、動画やマップが表示されます。</td>
    </tr>
</table>
<table>
  <th width="50%" style="background-color: #ffffe0; text-align: center;">お知らせページ</th>
  <th width="100%"  style="background-color: #ffffe0; text-align: center;">ご意見・ご感想ページ</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/666a9202c9c5953031ee32fd81f5b849.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/a158ea0141a6f488a5d70a16ea3ee4c2.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>開発者からの情報を公開するページです。informationテーブルの情報を部分テンプレートを使用して表示させています。</td>
      <td>ユーザーからの意見を取得するためのページです。ここから投稿することでcontactテーブルに情報が保存されます。</td>
    </tr>
</table>
<table>
  <th width="100% " colspan="2" style="background-color: #ffffe0; text-align: center;" >管理者ページ</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/cc1716ac44231ede19f587f9f8a3d030.png" alt="Image from Gyazo" width="1162"/></td>
      <td><img src="https://i.gyazo.com/6760739379ad2b33da046b86f792e16e.png" alt="Image from Gyazo" width="1162"/></td>
    </tr>
    <tr>
      <td>管理者ページです。rails_adminというgemを使用して管理者機能を作成しています。DBの編集や確認をできるようにしました。</td>
      <td>お知らせページの情報はここで編集します。また、ご意見・ご感想の内容をここで確認します。</td>
    </tr>
</table>

## 使用している技術
|カテゴリ|技術|
|----|----|
|フロントエンド|HTML/ CSS/ JavaScript|
|バックエンド|Ruby:3.1.4/ Ruby on Rails:7.0.8|
|データベース|MySQL|
|デプロイメント|heroku|
|API|LINEログイン/ Googleログイン/ Google map|
|環境構築|Docker/ docker-compose|

## 画面遷移図
[https://www.figma.com/design/o6TMJNeDlopGbjrtFKBrAm/%E7%84%A1%E9%A1%8C?node-id=0%3A1&t=f3htajkc9i7f7FnL-1](https://www.figma.com/design/o6TMJNeDlopGbjrtFKBrAm/%E7%84%A1%E9%A1%8C?node-id=0%3A1&t=f3htajkc9i7f7FnL-1)

## ER図
[https://drive.google.com/file/d/1EL9qhK3oPCbmDzAo1uuyJGDM3wqGwmUE/view?usp=sharing](https://drive.google.com/file/d/1EL9qhK3oPCbmDzAo1uuyJGDM3wqGwmUE/view?usp=sharing)



