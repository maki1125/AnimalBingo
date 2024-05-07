class UserSessionsController < ApplicationController
  skip_before_action :require_login, only: %i[create new]

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

  def destroy
    logout
    redirect_to login_path , status: :see_other , notice:"ログアウトしました" #リダイレクト先をログイン画面に指定する
    #binding.pry
  end
end
