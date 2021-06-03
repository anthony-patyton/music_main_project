class BillBoard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :title, :body, presence: true
  validates :title, uniqueness: true
end