5.times do
  billboard = BillBoard.create(
    title: Faker::Name.suffix,
    body: "I'm the body"
  )
  3.times do
    
    @artist = Artist.create(
      bill_board_id: billboard.id,
      name: Faker::Name.name,
      age: Faker::Number.between(from: 1, to: 50),
      about: Faker::ChuckNorris.fact
    )
    3.times do
    end
      Song.create(
        artist_id: @artist.id,
        title: Faker::GreekPhilosophers.name,
        body: Faker::GreekPhilosophers.quote,
        period: Faker::Date.between(from: '2001-01-01', to: Date.today),
        # audio: 'https://www.youtube.com/watch?v=EYKyhCkvsTI'
      )
    end
end
puts "Data Seeded"