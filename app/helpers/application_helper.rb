module ApplicationHelper
  def default_meta_tags
    {
      site: 'どうぶつビンゴ',
      title: '【アプリ】こども向け動物ビンゴゲーム',
      reverse: true,
      separator: '|',
      description: 'こども向けの動物のビンゴゲームです。遊ぶほど動物に詳しくなれます！クイズや動物の動画、動物園の場所までチェック出来ます！簡単に遊べますので、ぜひ一度お試しください。',
      keywords: '動物,ビンゴ,アプリ,こども',
      canonical: request.original_url,
      noindex: ! Rails.env.production?,
      charset: "utf-8"
      icon: [
        { href: image_url('favicon.ico') },
        { href: image_url('icon.jpg'), rel: 'apple-touch-icon', sizes: '180x180', type: 'image/jpg' },
      ],
      og: {
        site_name: 'どうぶつビンゴ',
        title: '【アプリ】こども向け動物ビンゴゲーム',
        description: 'こども向けの動物のビンゴゲームです。遊ぶほど動物に詳しくなれます！クイズや動物の動画、動物園の場所までチェック出来ます！簡単に遊べますので、ぜひ一度お試しください。', 
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
