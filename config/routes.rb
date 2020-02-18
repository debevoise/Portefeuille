Rails.application.routes.draw do
  devise_for :users, only: []
  
  root :to => 'static_pages#root'
  
  
  # devise_scope :user do
  #   # get 'login', to: 'devise/sessions#new', as: :new_user_session
  #   post 'api/login', to: 'devise/sessions#create', as: :user_session
  #   delete 'api/logout', to: 'devise/sessions#destroy', as: :destroy_user_session
  
  #   # get 'signup', to: 'devise/registrations#new', as: :new_user_registration
  #   post 'api/signup', to: 'devise/registrations#create', as: :user_registration
  # end
  
  
  
  devise_for :users, controllers: { registrations: "users/registrations", sessions: "users/sessions" }

  authenticated do
    namespace :api, defaults: { format: :json } do
      resources :transactions, only: :index do
        collection do
          post :buy, to: 'transactions#buy', as: 'buy'
          post :sell, to: 'transactions#sell', as: 'sell'
        end
      end

      resource :user, only: :show
      resources :stocks, only: :index
    end
  end

  match '*path', to: 'static_pages#root', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
