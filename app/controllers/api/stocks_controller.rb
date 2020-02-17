class Api::StocksController < ApplicationController
    before_action :authenticate_user!
    
    def index
        @stocks = current_user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a
    end
    
end
