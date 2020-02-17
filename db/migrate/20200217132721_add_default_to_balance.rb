class AddDefaultToBalance < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :balance
    add_column :users, :balance, :integer, null: false, default: 5000
  end
end
