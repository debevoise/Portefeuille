# == Schema Information
#
# Table name: stocks
#
#  id         :bigint           not null, primary key
#  company    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  ticker     :string           not null
#

class Stock < ApplicationRecord
    validates :ticker, presence: true
    
    has_many :transactions
    has_many :share_holders, through: :transactions, source: :users
end
