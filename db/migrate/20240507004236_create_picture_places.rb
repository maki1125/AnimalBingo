class CreatePicturePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :picture_places do |t|
      t.references :picture, null: false, foreign_key: true
      t.references :place, null: false, foreign_key: true

      t.timestamps
    end
  end
end
