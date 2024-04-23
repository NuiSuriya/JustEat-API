class CreateRestaraunts < ActiveRecord::Migration[7.1]
  def change
    create_table :restaraunts do |t|

      t.timestamps
    end
  end
end
