# README

■サービス概要 どんなサービスなのかを３行で説明してください。

こどもがめっちゃ楽しめて、親子で盛り上がれる、今までにないビンゴゲームアプリ！
数字のわからないこどもが楽しめるように、動物などの絵柄を揃えるビンゴで、
アプリを通じて親子の楽しい時間を提供するサービス。

■ このサービスへの思い・作りたい理由 このサービスの題材となるものに関してのエピソードがあれば詳しく教えてください。 このサービスを思いつくにあたって元となる思いがあれば詳しく教えてください。

保育園で動物ビンゴというものをやっているのを知り、
それをアプリにしてこどもと遊べたら楽しそうだと思った。

■ ユーザー層について 決めたユーザー層についてどうしてその層を対象にしたのかそれぞれ理由を教えてください。

ユーザー層：絵本を読むくらいのこども（1~6歳）とその親
絵本を読むような感じで親子で楽しめることを目的にしているため。

■サービスの利用イメージ ユーザーがこのサービスをどのように利用できて、それによってどんな価値を得られるかを簡単に説明してください。

親子で一緒にアプリを使用して、楽しい時間を過ごすことができる。
一つの端末で親と子で一緒にアプリを見ながら操作する。
自分で操作が難しい低年齢の子どもと一緒に使うのであれば、一つのビンゴカードで一緒に遊ぶ。操作は親が実施し、ビンゴのスタートボタン、ストップボタンを押す。スタートボタンを押すとルーレットが始まり、ストップボタンを押すと動物が表示される。表示された動物をカードの中から見つけてタッチすることでカードに印がついていく。縦・横・斜めに印が揃った時にビンゴと表示されゲーム終了となる。ゲームをやりながら、次は何が出るかな〜？この動物は何かな？犬だね！ルーレットででた動物はカードの中のどこにいるかな？などと声掛けしながら遊ぶ。
会話できる程度の年齢であれば、子どもに操作してもらう。ルーレットででた動物をカードの中からどちらが早く見つけることができるか競争したり、あと何の動物が出たらビンゴかな？などと声掛けしたりする。また、対戦形式で赤カードと青カードで色分けして表示されたビンゴカードで、例えば親が赤カード、子どもは青カードと決めて遊ぶ。
モード選択でき、3つの項目を設定することが出来る。1つ目はビンゴカード１枚（一緒に遊ぶ）か２枚（対戦形式）か。2つ目は、絵柄を動物、魚、車のどれにするか。3つ目はビンゴカードのマス目を３*３マス、４＊４マス、５＊５マスのどれかにするか。
さらに、コレクション機能でビンゴで揃えた絵柄をコレクションして一覧で見ることができる。
コレクションの中の1つにタッチすると、それに関する詳細情報や関連動画が表示されて、学ぶことができる。このページを親子で見て、この動物は何？何匹集めた？などと声掛けする。
アプリを通じて親子でたくさんのおしゃべりをして楽しい時間を共有できる。

■ ユーザーの獲得について 想定したユーザー層に対してそれぞれどのようにサービスを届けるのか現状考えていることがあれば教えてください。

・Twitterで紹介する。
・同じ保育園の人たちに紹介する。
・RUNTEQのmattermostで紹介する。
・youtubeで紹介する。

■ サービスの差別化ポイント・推しポイント 似たようなサービスが存在する場合、そのサービスとの明確な差別化ポイントとその差別化ポイントのどこが優れているのか教えてください。 独自性の強いサービスの場合、このサービスの推しとなるポイントを教えてください。

紙の動物ビンゴの台紙は売っているが、webアプリで動物ビンゴで遊べるものはないため、
webアプリ化することが差別化ポイントとなる。
紙ではなくwebアプリで遊べることで、手軽に簡単に遊ぶことができる。

■ 機能候補 現状作ろうと思っている機能、案段階の機能をしっかりと固まっていなくても構わないのでMVPリリース時に作っていたいもの、本リリースまでに作っていたいものをそれぞれ分けて教えてください。

【MVPリリース時に作っていたいもの】
・ルーレット機能
・ビンゴカード機能
・一人で遊ぶ機能（ビンゴカード1つ表示）
・絵のバリエーション１つ（動物）
・レベル１の３＊３マスのビンゴ
・パソコンの画面レイアウト

【本リリースまでに作っていたいもの】
・ユーザー登録機能
・二人で対戦する機能（ビンゴカード2つ表示）
・絵のバリエーション3つ（動物・魚・車）
・レベル２、３の４＊４マス、５＊５マスのビンゴ
・ビンゴした絵のコレクション機能
・保存機能
・スマホの画面レイアウト
・コレクションの詳細ページ機能
・ご意見・ご感想ページ


■ 機能の実装方針予定 一般的なCRUD以外の実装予定の機能についてそれぞれどのようなイメージ(使用するAPIや)で実装する予定なのか現状考えているもので良いので教えて下さい。
フロントエンド：HTML/CSS,JavaScript
バックエンド：Ruby on Rails
データベース：MySQL
デプロイメント：heroku
