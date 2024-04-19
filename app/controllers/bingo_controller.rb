class BingoController < ApplicationController
  skip_before_action :require_login
  
  def play
    #flash[:notice] = "ビンゴしましょう"
    #モード選択
    if logged_in?
      @mode = current_user.mode
      #初回ログインの場合モード選択まだのため
      if @mode.nil?
        @play_btn = 1
        @favorite_btn = 1
        @level_btn = 1
      else
        @play_btn = @mode.play_mode
        @favorite_btn = @mode.picture_mode
        @level_btn = @mode.level_mode
      end
      #binding.pry
    end
    #レベルの選択
    @mass = 3
    if @level_btn.present?
      case @level_btn
      when 1 #"やさしい(3*3マス)"
        @mass = 3
      when 2 #"ふつう(4*4マス)"
        @mass = 4
      when 3 #"むずかしい(5*5マス)"
        @mass = 5
      end
    end
    #絵の選択
    @pictures = Animal.order("RAND()").limit(@mass*@mass+1) #ビンゴカードマスとルーレットの分の画像を取得
    @pictures2 = Animal.order("RAND()").limit(@mass*@mass)
    if @favorite_btn.present?
      case @favorite_btn
      when 1 #"どうぶつ"
        @pictures = Animal.order("RAND()").limit(@mass*@mass+1)
        @pictures2 = Animal.order("RAND()").limit(@mass*@mass)
      when 2 #"さかな"
        @pictures = Fish.order("RAND()").limit(@mass*@mass+1)
        @pictures2 = Fish.order("RAND()").limit(@mass*@mass)
      when 3 #"きょうりゅう"
        @pictures = Dinosaur.order("RAND()").limit(@mass*@mass+1)
        @pictures2 = Dinosaur.order("RAND()").limit(@mass*@mass)
      end
    end
        
    @image_paths = @pictures.map(&:img) #データの順を同じにするためにpluckではくmapを使用。
    @image_paths2 = @pictures2.map(&:img) #2枚目のビンゴカード用データ
    @names = @pictures.map(&:name)
    @names2 = @pictures2.map(&:name)
    
    # binding.pry
    if @play_btn==2
      render 'bingo/play2'
    else
      render 'bingo/play1'
    end
  end
end
