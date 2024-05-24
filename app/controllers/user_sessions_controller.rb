class UserSessionsController < ApplicationController
  skip_before_action :require_login, only: %i[create new guest_login]

  def new
    @alluser=User.all.count
  end

  def create
    @user = login(params[:email], params[:password]) #emailとpasswordが一致していれば@userにデータが代入される(loginメソッドで検証を行なっている)
    if @user #訳：loginメソッドで検証が一致して、@userにデータだ代入されたら
      redirect_to bingo_path, notice:  "ログインしました"#ログインしたらroot_path(root toなどで指定したページ)にリダイレクトする。
      #binding.pry
    else
      flash.now[:notice] =  "ログインできませんでした"
      render :new #ログイン出来なかったら、ログインページ（'user_sessions#new'）にリダイレクトされる
    end
  end

  def guest_login
    @user = User.create(
      name: "ゲスト",
      email: SecureRandom.alphanumeric(10) + "@email.com",
      password: "password",
      password_confirmation: "password"
    )
    @user.save
    #binding.pry

    auto_login(@user)
    redirect_to root_path, notice:  "ゲストログインしました。データは保存されません。保存したい場合はログインをお願いします。"#ログインしたらroot_path(root toなどで指定したページ)にリダイレクトする。
    #binding.pry
  end

  def destroy
    if current_user.name=="ゲスト"
      User.find(current_user.id).destroy
    end
    #binding.pry
    logout
    redirect_to login_path , status: :see_other , notice:"ログアウトしました" #リダイレクト先をログイン画面に指定する
    

  end
end
