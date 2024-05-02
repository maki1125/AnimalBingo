class AddUploadToPictures < ActiveRecord::Migration[7.0]
  def change
    add_column :pictures, :upload, :string
  end
end
