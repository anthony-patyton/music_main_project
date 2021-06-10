class Song < ApplicationRecord
  before_save :check_artist
  belongs_to :artist

  validates :title, :body, presence: true

  def check_artist
    if self.artist.blank?
      self.author = 'anon'
    end
  end
end
