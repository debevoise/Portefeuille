class Api::TransactionsController < ApplicationController
    before_action :authenticate_user!

    def index
        @transactions = current_user.transactions.includes(:stock)
        render 'api/transactions/index'
    end

    def buy
        debugger
        @transaction = current_user.buy_stock(
            params[:transaction][:ticker],
            params[:transaction][:unit_price].to_i,
            params[:transaction][:quantity].to_i,
        )

        if @transaction
        else
        end
    end

    def sell
        @transaction

    end


    private
    def transaction_params
        params.require(:transaction).permit(:ticker, :unit_price, :quantity)
    end
end
