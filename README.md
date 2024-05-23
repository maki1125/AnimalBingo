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
    <th width="100%" colspan="2" >トップページ・ルーレット機能</th>
      <tr>
        <td width="50%">[![Image from Gyazo](https://i.gyazo.com/c3715b6a17ef30a3d604817a14ce81ec.jpg)](https://gyazo.com/c3715b6a17ef30a3d604817a14ce81ec)</td>
        <td>[![Image from Gyazo](https://i.gyazo.com/c3715b6a17ef30a3d604817a14ce81ec.jpg)](https://gyazo.com/c3715b6a17ef30a3d604817a14ce81ec)</td>
      </tr>
      <tr>
        <td>トップページには、ルーレット機能、投稿一覧、SNSシェアボタン、アプリの説明モーダルを配置しています。</td>
        <td>
        ルーレット機能ではランダムに投稿が表示されます。使用感を楽しく演出するため、アニメーション効果を取り入れました。この機能はログイン不要でアクセス可能です。上記画像はルーレットボタンを押した後のロード画面を示しています。
        </td>
      </tr>
</table>

<table>
  <th width="50%">投稿一覧</th><th width="100%">投稿詳細</th>
    <tr>
      <td width="50%"><img src="https://i.gyazo.com/c3715b6a17ef30a3d604817a14ce81ec.jpg" alt="Image from Gyazo" width="1162"/></td>
        <td><a href="https://gyazo.com/c3715b6a17ef30a3d604817a14ce81ec"><img src="https://i.gyazo.com/c3715b6a17ef30a3d604817a14ce81ec.jpg" alt="Image from Gyazo" width="1162"/></a></td>
    </tr>
    <tr>
      <td>投稿一覧画面にはおすすめ機能とオートコンプリート検索機能を実装しました。おすすめ機能では、ユーザーの「いいね」に基づいて関連の高い投稿を表示します。「いいね」が無い場合は、最も頻繁に使用されるタグが付けられた投稿を表示します。</td><td>いいね機能とSNSシェア機能を実装しました。</td>
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

