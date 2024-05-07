class Place < ApplicationRecord
  has_many :picture_places, dependent: :destroy
  has_many :pictures, through: :picture_places
end
