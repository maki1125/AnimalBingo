class User < ApplicationRecord
  has_many :user_pictures, dependent: :destroy
  has_many :pictures, through: :user_pictures

  has_many :posts, dependent: :destroy

  has_one :mode, dependent: :destroy
  has_one :quiz, dependent: :destroy #ユーザーはquizを一つしか持たない。ユーザーが削除されたらquizも削除される。
  after_create :create_default_quiz,:create_default_mode #ユーザ作成時にquizの初期データを作成する。
  #外部ログイン
  authenticates_with_sorcery!
  has_many :authentications, dependent: :destroy #googleログイン,lineログイン
  accepts_nested_attributes_for :authentications

  # それぞれの絵柄の一覧を取得する
  def animals
    pictures.where(type: 'UAnimal')
  end
  def fishes
    pictures.where(type: 'Fish')
  end
  def dinosaurs
    pictures.where(type: 'Dinosaur')
  end

  validates :password, length: { minimum: 1 }, if: -> { new_record? || changes[:crypted_password] }
  validates :password, confirmation: true, if: -> { new_record? || changes[:crypted_password] }
  validates :password_confirmation, presence: true, if: -> { new_record? || changes[:crypted_password] }
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true, length: { maximum: 255 }

  private
  def create_default_quiz
    build_quiz(
      quiz_select: 1,
      animal_quiz: 0,
      fish_quiz: 0,
      dinosaur_quiz: 0,
      ok_num: 0,
      new_num: 0
    )
    save
  end

  def create_default_mode
    build_mode(
      play_mode: 1,
      picture_mode: 1,
      level_mode:1
    )
    save
  end

  
end
