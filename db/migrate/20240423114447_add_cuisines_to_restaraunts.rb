class AddCuisinesToRestaraunts < ActiveRecord::Migration[7.1]
  def change
    add_column :restaraunts, :cuisines, :string, array: true, default: []
  end
end
