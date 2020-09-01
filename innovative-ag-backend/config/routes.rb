Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:create, :show, :destroy]
  resources :messages, only: [:create, :show, :index]
  resources :crops_info, only: [:create, :show, :index, :edit, :update]
end
