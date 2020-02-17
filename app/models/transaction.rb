# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  quantity   :string           not null
#  stock_id   :bigint
#  user_id    :bigint
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  unit_price :float            not null
#

class Transaction < ApplicationRecord
  validates :quantity, :stock_id, :user_id, :unit_price, presence: true
  validates :unit_price, numericality: { :greater_than => 0.0 }
  
  belongs_to :stock
  belongs_to :user

  
end
