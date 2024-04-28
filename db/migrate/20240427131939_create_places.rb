class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.belongs_to :picture, null: false, foreign_key: true
      t.string :adress
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
