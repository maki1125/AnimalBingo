class ModesController < ApplicationController
  def select; end

  def new
    @mode = current_user.mode
  end

  def update #ユーザー作成の時にmodeデータ作成されているためcreateはなくupdateのみ。
    @mode = current_user.mode
    if @mode.update(mode_params)
      redirect_to bingo_path
    else
      render :new
    end
  end

  private
  def mode_params
    params.require(:mode).permit(:play_mode, :picture_mode, :level_mode)
  end
end
