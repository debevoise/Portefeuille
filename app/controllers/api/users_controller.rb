class Api::UsersController < ApplicationController
    before_action :authenticate_user!
    
    def show
        @user = current_user
        @stocks = current_user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a

        render 'api/users/show'
    end
end
