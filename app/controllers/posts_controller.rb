class PostsController < ApplicationController

def create
  #binding.pry
  picture_id = current_user.mode.picture_id #picture_id

  @post = Post.new(
    user_id: current_user.id,
    user_name: current_user.name,
    picture_id: picture_id
  )
  
  if @post.update(post_params)
    redirect_to controller: "collections", action: "show", id: picture_id
    #binding.pry
  else
    flash[:notice] = "投稿内容が空です。もう一度お願いします。"
    redirect_to controller: "collections", action: "show", id: picture_id
    # binding.pry
  end
end

def destroy
  @post = Post.find(params[:id]).destroy
  picture_id = current_user.mode.picture_id #picture_id
  redirect_to controller: "collections", action: "show", id: picture_id
end


private
def post_params
  params.require(:post).permit(:picture_id, :comment, :img)
end

end
