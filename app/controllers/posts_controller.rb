class PostsController < ApplicationController

def create
  @post = Post.new(
    user_id: current_user.id,
    user_name: current_user.name,
    picture_id: current_user.mode.picture_id
  )
  
  if @post.update(post_params)
    redirect_to controller: "collections", action: "show", id: current_user.mode.pic_no
  else
    flash[:notice] = "投稿内容が空です。もう一度お願いします。"
    redirect_to controller: "collections", action: "show", id: current_user.mode.pic_no
  end

end

def destroy
  @post = Post.find(params[:id]).destroy
  redirect_to controller: "collections", action: "show", id: current_user.mode.pic_no
end

private
def post_params
  params.require(:post).permit(:picture_id, :comment, :img)
end

end
