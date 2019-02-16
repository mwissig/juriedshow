class CreatePaintings < ActiveRecord::Migration[5.2]
  def change
    create_table :paintings do |t|
      t.string :title
      t.string :artist
      t.integer :points
      t.string :color1
      t.string :color2
      t.string :color3
      t.string :color4
      t.string :coords1
      t.string :coords2
      t.string :coords2

      t.timestamps
    end
  end
end
