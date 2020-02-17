# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  balance                :float            default(5000.0), not null
#

class User < ApplicationRecord
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
	validates :balance, numericality: { greater_than_or_equal_to: 0 }
	
	devise :database_authenticatable, :registerable,
			:recoverable, :rememberable, :validatable

	has_many :transactions
	has_many :stocks, through: :transactions

	def buy_stock(ticker, quantity, unit_price)
		stock = Stock.find_by_ticker(ticker)
		if stock && self.balance >= quantity * unit_price

			
		else
			return
		end
		
	end


end
