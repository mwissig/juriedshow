Rails.application.routes.draw do

  get 'top' => 'pages#top'
  get 'vote' => 'pages#vote'
  root 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

resources :paintings

end
