class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :about
      t.integer :age
      t.belongs_to :bill_board, null: false, foreign_key: true

      t.timestamps
    end
  end
end
