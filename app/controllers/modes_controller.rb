class ModesController < ApplicationController
  def select; end

  # モード選択押した時に新規か更新かわからないため条件分岐を設ける
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
