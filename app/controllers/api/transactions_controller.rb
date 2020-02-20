class Api::TransactionsController < ApplicationController
    before_action :authenticate_user!

    def index
        @transactions = current_user.transactions.includes(:stock)
        @stocks = current_user
                .transactions
                .includes(:stock)
                .group(:stock)
                .sum('quantity')
                .to_a
        render 'api/transactions/index'
    end




    private
    def transaction_params
        params.require(:transaction).permit(:ticker, :unit_price, :quantity)
    end
end
