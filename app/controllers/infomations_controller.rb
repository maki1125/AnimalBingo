class InfomationsController < ApplicationController
  skip_before_action :require_login
  def index
    @infomations = Infomation.all.order(created_at: :desc).page(params[:page])
  end
end
