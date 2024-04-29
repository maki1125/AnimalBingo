Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  #トップページ
  root "static_pages#top" 
  get "privacy" => "static_pages#privacy"
  get "terms" => "static_pages#terms"

  #ビンゴページ
  get "bingo" => "bingo#play" 

  #お問い合わせ
  resources :contacts, only: [:new, :create] 

  #ログイン関係
  get 'login', to: 'user_sessions#new' 
  post 'login', to: 'user_sessions#create' 
  delete 'logout', to: 'user_sessions#destroy' 

  #ユーザー登録
  resources :users, only: %i[new create]

  #コレクション
  resources :collections, only: %i[index show]
  post '/collections/save', to: 'collections#save'
  
  #モード選択
  get '/modes/select', to: 'modes#select'
  resources :modes, only: %i[new create update edit]

  #クイズ
  get '/quizzes/play', to: 'quizzes#play'
  resources :quizzes, only: %i[new create update edit]
  post '/quizzes/save', to: 'quizzes#save'
  get '/quizzes/save2', to: 'quizzes#save2'
  #メール確認（開発用）
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: '/letter_opener'
  end

  #googleログイン
  post "oauth/callback" => "oauths#callback"
  get "oauth/callback" => "oauths#callback" 
  get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider
end
