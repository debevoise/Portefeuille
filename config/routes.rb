Rails.application.routes.draw do
  devise_for :users, only: []
  
  root :to => 'static_pages#root'
  
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
end
