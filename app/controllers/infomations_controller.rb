class InfomationsController < ApplicationController
  def index
    @infomations = Infomation.all.order(created_at: :desc).page(params[:page])
  end
end
