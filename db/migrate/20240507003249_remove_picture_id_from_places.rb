class RemovePictureIdFromPlaces < ActiveRecord::Migration[7.0]
  def change
    remove_column :places, :picture_id
  end
end
