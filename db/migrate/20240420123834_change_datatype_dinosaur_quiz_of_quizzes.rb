class ChangeDatatypeDinosaurQuizOfQuizzes < ActiveRecord::Migration[7.0]
  def change
    change_column :quizzes, :dinosaur_quiz, :integer
  end
end
