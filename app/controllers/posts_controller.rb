class PostsController < ApplicationController
#def new
  #@post = Post.new(
    #user_id: current_user.id
    #picture_id: params[:id]
  #)
  #binding.pry
#end

def create #ユーザー作成の時にmodeデータ作成されているためcreateはなくupdateのみ。
  #binding.pry
  @post = Post.new(
    user_id: current_user.id,
    user_name: current_user.name
  )
  picture_id = current_user.mode.picture_id #picture_id
  
  if @post.update(post_params)
    redirect_to controller: "collections", action: "show", id: picture_id
    #binding.pry
  else
    flash[:notice] = "投稿内容が空です。もう一度お願いします。"
    redirect_to controller: "collections", action: "show", id: picture_id
    # binding.pry
  end
end

private
def post_params
  params.require(:post).permit(:picture_id, :comment, :img)
end

end
