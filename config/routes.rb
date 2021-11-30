Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'getmessages', to: "index#getmessages"
  root to: "index#show"
end
