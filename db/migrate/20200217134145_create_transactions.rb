class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.string :quantity, null: false
      t.integer :unit_price, null: false
      t.references :stock, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
