Rails.application.routes.draw do
  # root 'controller#action'  
  root 'bill_boards#index'

  resources :bill_boards do
    resources :artists
  end

  resources :artists do
    resources :songs
  end
end
