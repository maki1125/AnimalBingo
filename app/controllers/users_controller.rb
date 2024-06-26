class UsersController < ApplicationController
  skip_before_action :require_login, only: %i[create new]
  
  def new
    @user = User.new #(新規登録で作ったデータを@userに代入する)
  end

  def create
    @user = User.new(user_params)#（postメソッドでUser.newからのデータが送られてきている）新規登録で作ったデータに(user_params)という引数をつけて@userに代入する  
    if @user.save#訳：@userが保存できたら
      login(user_params[:email], user_params[:password])#ユーザー登録したらログインする
      redirect_to root_path, notice: "ユーザー登録しました。ログインしました。"#（ログイン出来たら「user_sessionsのnew」に飛ぶ(redirect_to)ようになる。*「user_sessionsについては後に説明）
    else#訳：@userが保存できなかったら
      flash.now[:notice] = "ユーザー登録できませんでした。"
      render :new #（ログイン出来なければ、usersのnewに戻る（render）） 
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name, :password_confirmation)
  end
end
