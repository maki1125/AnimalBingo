class OauthsController < ApplicationController
  skip_before_action :require_login
  def oauth
    #指定されたプロバイダの認証ページにユーザーをリダイレクトさせる
    #binding.pry
    login_at(params[:provider])
    #binding.pry
  end

  def callback
    provider = params[:provider]
    
    #binding.pry
    # 既存のユーザーをプロバイダ情報を元に検索し、存在すればログイン
    if (@user = login_from(provider))
      redirect_to root_path, notice:"#{provider.titleize}アカウントでログインしました"
    else
      #begin
        # ユーザーが存在しない場合はプロバイダ情報を元に新規ユーザーを作成し、ログイン
        signup_and_login(provider)
        redirect_to root_path, notice:"#{provider.titleize}アカウントでログインしました"
        #binding.pry
      #rescue
        #redirect_to login_path, alert:"#{provider.titleize}アカウントでのログインに失敗しました"
        #binding.pry
      #end
    end
  end

  private

  def auth_params
    params.permit(:code, :provider)
  end

  def signup_and_login(provider)
    @user = create_from(provider)
    reset_session
    auto_login(@user)
  end

end
