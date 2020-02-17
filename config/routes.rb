Rails.application.routes.draw do
  devise_for :users

  unauthenticated do
    root :to => 'homes#index'
  end



  # authenticated do
  #   root :to => 'dashboard#index'
  # end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
