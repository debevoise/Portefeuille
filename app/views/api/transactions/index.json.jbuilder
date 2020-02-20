json.transactions do
    @transactions.each do |transaction|
        json.set! transaction.id do
            json.partial! 'api/transactions/transaction', transaction: transaction
        end
    end
end

@stocks.each do |stock_array| 
    stock = stock_array[0]
    quantity = stock_array[1]
    
    json.stocks do 
        json.set! stock.id do
            json.partial! 'api/stocks/stock', stock: stock, quantity: quantity
        end
    end
end