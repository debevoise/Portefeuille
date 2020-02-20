@stocks.each do |stock_array| 
    stock = stock_array[0]
    quantity = stock_array[1]

    json.user do
        json.portfolio do
            json.set! stock.id do
                json.stock_id stock.id
                json.quantity quantity
            end
        end
    end
    
    json.stocks do 
        json.set! stock.id do
            json.partial! 'api/stocks/stock', stock: stock, quantity: quantity
        end
    end
end

json.user do
    json.partial! 'api/users/user', user: @user
end

json.transaction do
    json.partial! 'api/transactions/transaction', transaction: @transaction
end