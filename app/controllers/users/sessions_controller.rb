# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  # prepend_before_filter :require_no_authentication, :only => [:create ]

  # POST /users/sign_in
  def create
    @user = User.find_by_email(params[:user][:email])
    
    if @user && @user.valid_password?(params[:user][:password])
      # sign_in("user", resource)
      sign_in(@user)
      @stocks = @user
            .transactions
            .includes(:stock)
            .group(:stock)
            .sum('quantity')
            .to_a
            
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 422
    end

  end


  def destroy
    super
  end

  protected
  
  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  end

  private
  def sign_up_params
    params.require(:user).permit(:email, :password)
  end
end
