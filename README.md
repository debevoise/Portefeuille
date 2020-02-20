# Portefeuille

### A stock portfolio app completed for NYC Tech Talent Pipeline's coding challenge



## Buying stocks



Users input a stock ticker symbol and their desired quantity. On submit, Portefeuille gathers current information about the stock (company name and price) and confirms with the total price with the user. The stock purchase form displays semantic error messages for invalid ticker names and insufficient funds and prevents users from requesting 

Backend validations on the User and Transaction database models ensure a further layer of protection from illegal requests: 

```ruby
# user.rb

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
			return false
		end
	end
```

