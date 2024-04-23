class AddNewnumToQuizzes < ActiveRecord::Migration[7.0]
  def change
    add_column :quizzes, :new_num, :integer
  end
end
