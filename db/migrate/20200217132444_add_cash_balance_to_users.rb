class AddCashBalanceToUsers < ActiveRecord::Migration[5.2]
  def change

    add_column :users, :balance, :int
  end
end
