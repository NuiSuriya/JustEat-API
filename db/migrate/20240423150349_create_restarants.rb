class CreateRestarants < ActiveRecord::Migration[7.1]
  def change
    create_table :restarants do |t|
      t.string :name
      t.float :rating
      t.text :address
      t.string :city

      t.timestamps
    end
  end
end
