class AddOknumToQuizzes < ActiveRecord::Migration[7.0]
  def change
    add_column :quizzes, :ok_num, :integer
  end
end
