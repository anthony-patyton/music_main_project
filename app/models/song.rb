class Song < ApplicationRecord
  belongs_to :artist

  validates :title, :body, presence: true
end
