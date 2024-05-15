class AddPageToModes < ActiveRecord::Migration[7.0]
  def change
    add_column :modes, :page, :integer
    add_column :modes, :pic, :string
    add_column :modes, :picture_id, :integer
    add_column :posts, :user_name, :string
  end
end
