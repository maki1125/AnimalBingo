class Picture < ApplicationRecord
  has_many :user_pictures, dependent: :destroy
  has_many :users, through: :user_pictures
  has_many :picture_places, dependent: :destroy
  has_many :places, through: :picture_places
  mount_uploader :upload, PictureUploader
end
