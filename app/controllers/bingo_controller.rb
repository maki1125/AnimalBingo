class BingoController < ApplicationController
  skip_before_action :require_login
  
  def play
    #ログインにより処理分ける
    if logged_in?#ユーザー登録した人
      @quiz = current_user.quiz
      @mode = current_user.mode
      @play_btn = @mode.play_mode
      @favorite_btn = @mode.picture_mode
      @level_btn = @mode.level_mode
    else #ユーザー登録無しで遊ぶ人
      @mass = 3
      friend = 0
    end

    #レベルの選択
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
    if @favorite_btn.present?
      case @favorite_btn
      when 1 #"どうぶつ"
        select_table = Animal
        friend = @quiz.animal_quiz
      when 2 #"さかな"
        select_table = Fish
        friend = @quiz.fish_quiz
      when 3 #"きょうりゅう"
        select_table = Dinosaur
        friend = @quiz.dinosaur_quiz
      end
    else
      select_table = Animal
      friend = 0
    end
    @pictures = select_table.first(30+friend).sample(@mass*@mass) #ビンゴカードマス分の画像を取得
    @pictures2 = select_table.first(30+friend).sample(@mass*@mass)
    @image_paths = @pictures.map(&:img) #データの順を同じにするためにpluckではくmapを使用。
    @image_paths2 = @pictures2.map(&:img) #2枚目のビンゴカード用データ
    @names = @pictures.map(&:name)
    @names2 = @pictures2.map(&:name)
    
    #遊び方の選択
    if @play_btn==2
      render 'bingo/play2'
    else
      render 'bingo/play1'
    end
  end
end
