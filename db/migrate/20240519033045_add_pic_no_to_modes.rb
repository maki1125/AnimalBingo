class AddPicNoToModes < ActiveRecord::Migration[7.0]
  def change
    add_column :modes, :pic_no, :integer
  end
end
