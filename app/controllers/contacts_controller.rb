class ContactsController < ApplicationController
  skip_before_action :require_login
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      #redirect_to new_contact_path, notice: "お問い合わせありがとうございました。"
    else
      flash.now[:notice] = "お問い合わせ出来ませんでした。再度お願いします。"
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:content)
   end
end
