class CollectionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    #現在のモードで最初の表示のコレクション一覧を変化させる。
    @mode = current_user.mode 
    @page = params[:page]#詳細から戻った時にあるデータ
    @favorite_btn = params[:pic].to_i#詳細から戻った時にあるデータ
    # binding.pry
    #初回ログインの場合モード選択未定のため
    #if @mode.nil?
      #@favorite_btn = 1
    #else
      
    #end
    if @page.nil? 
      @page=1
      @favorite_btn = @mode.picture_mode
    end
    
    #選択絵柄ごとの処理
    case @favorite_btn
    when 1 #"どうぶつ"
      @favorite_btn="どうぶつ"
    when 2 #さかな
      @favorite_btn="さかな"
    when 3 #きょうりゅう
      @favorite_btn="きょうりゅう"
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
  end

  def show
    
    
    #binding.pry
    #pageの取得。index->showの場合はある。post->showの場合はない。
    if params[:pic]!=nil
      pic = params[:pic]
      @page = params[:page]
      mode = current_user.mode
      mode.page = @page #Modeデータベースに保存。postのcreateからページを戻すため。
      mode.pic = params[:pic] #Modeデータベースに保存。postのcreateからページを戻すため。
      mode.picture_id = params[:id]
      mode.save # データ保存
    end
      pic = current_user.mode.pic
      @page = current_user.mode.page

      case pic
    when "どうぶつ"
      @animal = Animal.offset(params[:id].to_i - 1).first #pictureのIDは項目関係なく連番でつけられているため、offset使用してそれぞれの項目の何番目のデータを持ってくるというようにしている。
      @pic_mode = 1; #indexに戻る時に必要な情報
    when "さかな"
      @animal = Fish.offset(params[:id].to_i - 1).first
      @pic_mode = 2;
    when "きょうりゅう"
      @animal = Dinosaur.offset(params[:id].to_i - 1).first
      @pic_mode = 3;
      # binding.pry
    end
   #binding.pry
    #@post = Post.new(
      #user_id: current_user.id,
      #user_name: current_user.name,
      #picture_id: @animal.id
    #)
    @posts = Post.where(picture_id: @animal.id).order(created_at: "DESC")
    places = @animal.places
    @adresses = places.map(&:adress)
    @names = places.map(&:name)
    @urls = places.map(&:url)
    # binding.pry
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

  private
  def page_params
  end
end
