class ChangeToFloat < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :balance
    add_column :users, :balance, :float, default: 5000.0, null: false
    remove_column :transactions, :unit_price
    add_column :transactions, :unit_price, :float, null: false


  end
end
