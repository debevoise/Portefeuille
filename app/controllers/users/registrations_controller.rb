class Users::RegistrationsController < Devise::RegistrationsController

  
  # POST /resource
  def create
    @user = User.new(sign_up_params)
    
    if @user.save
      sign_in(@user)
      @stocks = @user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a

      render 'api/users/show'
    else
      render json: resource.errors.full_messages, status: 422
    end
  end

  private
  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
