class AddCuisinesToRestaurants < ActiveRecord::Migration[7.1]
  def change
    add_column :restaurants, :cuisines, :string, array: true, default: []
  end
end
