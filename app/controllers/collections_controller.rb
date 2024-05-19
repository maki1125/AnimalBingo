class CollectionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    #現在のモードで最初の表示のコレクション一覧を変化させる。
    @mode = current_user.mode 
    @page = @mode.page
    @picture_mode = @mode.picture_mode

    #詳細からのページ遷移ではない時。
    if @page==nil 
      @page=1
      @picture_mode = @mode.picture_mode
    end

    #すべての絵柄のコレクションデータを準備
    #1.動物
    @allanimal = Animal.all
    @colanimal = current_user.animals
    @allanimal_img = @allanimal.map(&:img)
    @colanimal_img = @colanimal.map(&:img) #データの順を同じにするためにpluckではくmapを使用。
    #2.魚
    @allfish = Fish.all
    @colfish = current_user.fishes
    @allfish_img =  @allfish.map(&:img)
    @colfish_img = @colfish.map(&:img) #データの順を同じにするためにpluckではくmapを使用。
    #3.恐竜
    @alldinosaur = Dinosaur.all
    @coldinosaur = current_user.dinosaurs
    @alldinosaur_img =  @alldinosaur.map(&:img)
    @coldinosaur_img = @coldinosaur.map(&:img) #データの順を同じにするためにpluckではくmapを使用。
    #はてなマーク
    @question_img = 'question101.png'

    #仲間の数
    @quiz=current_user.quiz
    #binding.pry
  end

  def show
    mode = Mode.where(user_id: current_user.id).first

    #pageの取得。index（一覧）->showの場合はある。post（投稿）->showの場合はない。
    if params[:picture_mode]!=nil
      page = params[:page]
      mode.page = page #Modeデータベースに保存。postのcreateからページを戻すため。
      mode.picture_mode = params[:picture_mode] #1,2,3
      mode.pic_no = params[:id] #各種別の頭からの番号1~100
      mode.save # データ保存
    end

    case current_user.mode.picture_mode
    when 1 #"どうぶつ"
      @animal = Animal.offset(params[:id].to_i - 1).first #pictureのIDは項目関係なく連番でつけられているため、offset使用してそれぞれの項目の何番目のデータを持ってくるというようにしている。
    when 2 #"さかな"
      @animal = Fish.offset(params[:id].to_i - 1).first
    when 3 #"きょうりゅう"
      @animal = Dinosaur.offset(params[:id].to_i - 1).first
    end

    #画像が決定指定から、picture_idの保存。
    mode.picture_id = @animal.id #1~300
    mode.save

    @posts = Post.where(picture_id: @animal.id).order(created_at: "DESC")
    places = @animal.places
    @adresses = places.map(&:adress)
    @names = places.map(&:name)
    @urls = places.map(&:url)
    #binding.pry
  end

  def save
    @bingo_save = params[:hoge]
    @animal_save = Picture.where(name: @bingo_save)
    @animal_save.each do |animal|
      current_user.pictures << animal unless current_user.pictures.exists?(name: animal.name)
      #binding.pry
    end
    #binding.pry
  end

end
