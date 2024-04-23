class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.belongs_to :user, index: { unique: true }, foreign_key: true
      t.integer :quiz_select
      t.integer :animal_quiz
      t.integer :fish_quiz
      t.string :dinosaur_quiz

      t.timestamps
    end
  end
end
