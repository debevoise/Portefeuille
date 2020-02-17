class Api::UsersController < ApplicationController
    def stocks
        @stocks = current_user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a
    end
end
