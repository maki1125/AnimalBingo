module ApplicationHelper
  def default_meta_tags
    {
      site: 'どうぶつビンゴ',
      title: 'タイトル',
      reverse: true,
      separator: '|',
      description: '子供向けの動物の絵柄のビンゴゲームです。遊ぶほど動物に詳しくなる
      ！クイズや動物の動画、動物園の場所までチェック出来ちゃう！',
      keywords: 'キーワード',
      canonical: request.original_url,
      noindex: ! Rails.env.production?,
      icon: [
        { href: image_url('favicon.ico') },
        #{ href: image_url('icon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'どうぶつビンゴ',
        title: 'タイトル',
        description: '子供向けの動物の絵柄のビンゴゲームです。遊ぶほど動物に詳しくなる
        ！クイズや動物の動画、動物園の場所までチェック出来ちゃう！', 
        type: 'website',
        url: request.original_url,
        image: image_url('OGP_90KB.png'),
        locale: 'ja_JP',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@gong_zhen17902',
      }
      #fb: {
        #app_id: ''
      #}
    }
  end
end
