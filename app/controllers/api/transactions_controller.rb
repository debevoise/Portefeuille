class Api::TransactionsController < ApplicationController
    before_action :authenticate_user!

    def index
        @transactions = current_user.transactions
        render :index
    end

    def buy

    end

    def sell

    end


    private
    def transaction_params
        params.require(:transaction).permit(:ticker, :unit_price, :quantity)
    end
end
