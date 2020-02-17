class ChangeStockTicker < ActiveRecord::Migration[5.2]
  def change
    remove_column :stocks, :ticker
    add_column :stocks, :ticker, :string, null: false
    add_index :stocks, :ticker, unique: true
    
  end
end
