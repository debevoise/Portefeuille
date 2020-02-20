class Api::StocksController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @stocks = current_user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a
        
        render 'api/stocks/index'
    end

    def buy
        @transaction = current_user.buy_stock(
            transaction_params[:ticker],
            transaction_params[:company],
            transaction_params[:unit_price].to_i,
            transaction_params[:quantity].to_i,
        )

        if @transaction
            @user = current_user
            @stocks = current_user
                .transactions
                .includes(:stock)
                .group(:stock)
                .sum('quantity')
                .to_a

            render 'api/stocks/receipt'
        else
            render json: ['Could not complete transaction'], status: 422
        end
    end

    private
    def transaction_params
        params.require(:transaction).permit(:ticker, :company, :unit_price, :quantity)
    end
end
