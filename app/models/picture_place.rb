class PicturePlace < ApplicationRecord
  belongs_to :picture
  belongs_to :place
end
