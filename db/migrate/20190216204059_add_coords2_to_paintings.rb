class AddCoords2ToPaintings < ActiveRecord::Migration[5.2]
  def change
    add_column :paintings, :coords3, :string
  end
end
