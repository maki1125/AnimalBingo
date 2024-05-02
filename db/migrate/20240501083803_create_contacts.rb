class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.text :content
      t.date :resolved_at

      t.timestamps
    end
  end
end
