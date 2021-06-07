5.times do
  billboard = BillBoard.create(
    title: Faker::Name.suffix
  )
  3.times do
    
    @artist = Artist.create(
      bill_board_id: billboard.id,
      name: Faker::Name.name,
      age: Faker::Number.between(from: 1, to: 50),
      about: Faker::ChuckNorris.fact
    )
  end
    3.times do
      
      Song.create(
        artist_id: @artist.id,
        body: Faker::GreekPhilosophers.quote,
        date_added: Faker::Date.between(from: '2001-01-01', to: Date.today),
        audio: 'https://www.youtube.com/watch?v=EYKyhCkvsTI'
      )
    end
end
puts "Data Seeded"