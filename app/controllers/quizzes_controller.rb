class QuizzesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @quiz = current_user.quiz #ユーザー作成時にquizデータ作られている。
  end

  def update #ユーザ作成時にquizデータ作られるためcreateはなくupdateのみ。
    @quiz = current_user.quiz
    if @quiz.update(quiz_params)
      redirect_to quizzes_play_path
    else
      render :new
    end
  end

  def play
    @quiz = current_user.quiz
    #クイズ用のデータ取得
    case @quiz.quiz_select
      when 1 #"どうぶつ"
        pictures = Animal.first(30+@quiz.animal_quiz).sample(15)
      when 2 #"さかな"
        pictures = Fish.first(30+@quiz.fish_quiz).sample(15)
      when 3 #"きょうりゅう"
        pictures = Dinosaur.first(30+@quiz.dinosaur_quiz).sample(15)
    end
    @pictures_img =  pictures.map(&:img) #imgパスデータ
    @pictures_name =  pictures.map(&:name) #nameデータ
    # binding.pry 
  end

  #ok_num,new_numの保存。ビュー表示ができなかったのでsave2で実現。
  def save
    ok_num = params[:hoge].to_i #javascriptから値を受け取る。
    new_num = ok_num
    #画像の上限確認
    case current_user.quiz.quiz_select
      when 1 #"どうぶつ"
        allNum = Animal.all.count #全画像数
        num = current_user.quiz.animal_quiz#追加する前の仲間の数
        if (30+num+ok_num)>allNum #全画像より多い時制限する。10はベースの動物の数
          new_num = allNum-30-num #新たに仲間に入った数。
          num = allNum -30-new_num #仲間にした数
        end
        current_user.quiz.update(animal_quiz: num+new_num)#追加した仲間の数
      when 2 #"さかな"
        allNum = Fish.all.count #全画像数
        num = current_user.quiz.fish_quiz#追加する前の仲間の数
        if (30+num+ok_num)>allNum #全画像より多い時制限する。10はベースの動物の数
          new_num = allNum-30-num #新たに仲間に入った数。
          num = allNum -30-new_num #仲間にした数
        end
        current_user.quiz.update(fish_quiz: num+new_num)#追加した仲間の数
      when 3 #"きょうりゅう"
        allNum = Dinosaur.all.count #全画像数
        num = current_user.quiz.dinosaur_quiz#追加する前の仲間の数
        if (30+num+ok_num)>allNum #全画像より多い時制限する。10はベースの動物の数
          new_num = allNum-30-num #新たに仲間に入った数。
          num = allNum -30-new_num #仲間にした数
        end
        current_user.quiz.update(dinosaur_quiz: num+new_num)#追加した仲間の数
    end 
    current_user.quiz.update(ok_num: ok_num )
    current_user.quiz.update(new_num: new_num)
    @quiz = current_user.quiz
    #binding.pry
    #redirect_to quizzes_save2_path # save2アクションにリダイレクト
  end

  #DBからデータ取得してビュー表示
  def save2
    #current_user.quiz.reload #データの更新。animal_quizが更新するため。
    @quiz = current_user.quiz
    new_num = @quiz.new_num

    #絵柄のmaxを超えていないか確認の処理
    case @quiz.quiz_select
      when 1 #"どうぶつ"
        num = current_user.quiz.animal_quiz
        newFriends = Animal.offset(30+num-new_num).limit(new_num); #画像がない場合は空となる。
        @allfriend=Animal.all.count
        @picture_mode="どうぶつ"
      when 2 #"さかな"
        num = current_user.quiz.fish_quiz
        newFriends = Fish.offset(30+num-new_num).limit(new_num); #画像がない場合は空となる。
        @allfriend=Fish.all.count
        @picture_mode="さかな"
      when 3 #"きょうりゅう"
        num = current_user.quiz.dinosaur_quiz
        newFriends = Dinosaur.offset(30+num-new_num).limit(new_num); #画像がない場合は空となる。
        @allfriend=Dinosaur.all.count
        @picture_mode="きょうりゅう"
      end
    @friendNum = num
    @new_friend_img = newFriends.map(&:img) #imgのデータ
    #はてなマーク
    @question_img = 'question101.png'
  end

  private
  def quiz_params
    params.require(:quiz).permit(:quiz_select)
  end

end
