Rails.application.routes.draw do
  devise_for :users, only: []
  
  root :to => 'static_pages#root'
  
  devise_for :users, controllers: { registrations: "users/registrations", sessions: "users/sessions" }

  authenticated do
    namespace :api, defaults: { format: :json } do
      resources :transactions, only: :index 

      resource :user, only: :show
      resources :stocks, only: :index do
        collection do
          post :buy, to: 'stocks#buy', as: 'buy'
          post :sell, to: 'stocks#sell', as: 'sell'
        end
      end
    end
  end

  match '*path', to: 'static_pages#root', via: :all
end
