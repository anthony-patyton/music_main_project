class Artist < ApplicationRecord
  belongs_to :bill_board
  has_many :songs, dependent: :destroy

  validates :name, :about, presence :true
  validates :name, :about, uniqueness :true
end
