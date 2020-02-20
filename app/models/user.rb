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

	has_many :transactions, dependent: :destroy
	has_many :stocks, through: :transactions

	def buy_stock(ticker, company, unit_price, quantity)
		stock = Stock.find_by_ticker(ticker)
		if !stock 
			stock = Stock.new(ticker: ticker, company: company)
			stock.save!
		end

		if self.balance >= quantity * unit_price
			transaction = self.transactions.new({
				stock_id: stock.id,
				unit_price: unit_price,
				quantity: quantity 
			})

			if transaction.valid?
				self.balance = self.balance - (quantity * unit_price)
				transaction.save
				self.save
				return transaction
			else 
				return false
			end
		else
			self.errors.full_messages << "Insufficient funds"
			return false
		end
	end

	def sell_stock(ticker, quantity, unit_price)
		stock = Stock.find_by_ticker(ticker)
		return false if !stock 

		if quantity <= user.transactions.where(stock_id: stock.id).sum(:quantity)
			transaction = self.transactions.new({
				stock_id: stock.id,
				unit_price: unit_price,
				quantity: -quantity 
			})
			return transaction.save ? transaction : false
		else
			return false
		end
	end


end
