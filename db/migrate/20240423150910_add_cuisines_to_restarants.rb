class AddCuisinesToRestarants < ActiveRecord::Migration[7.1]
  def change
    add_column :restarants, :cuisines, :string, array: true, default: []
  end
end
