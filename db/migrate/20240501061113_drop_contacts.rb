class DropContacts < ActiveRecord::Migration[7.0]
  def change
    drop_table :contacts, if_exists: true
  end
end
