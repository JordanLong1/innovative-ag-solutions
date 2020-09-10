Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :sessions, only: [:create, :destroy]
  get '/get_current_user', to: 'sessions#get_current_user'
  resources :users, only: [:create, :show, :destroy]
  resources :messages, only: [:create, :show, :index]
  resources :crop_infos, only: [:create, :show, :index, :edit, :update]
  resources :pcas, only: [:create, :show, :destroy, :index]
  resources :growers, only: [:create, :show, :destroy]
end
