class CreateRestaraunts < ActiveRecord::Migration[7.1]
  def change
    create_table :restaraunts do |t|
      t.string :name
      t.float :rating
      t.text :address
      t.string :city

      t.timestamps
    end
  end
end
