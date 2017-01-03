Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }, only: [:create, :update]

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do
    namespace :v1 do
      resources :translations do
        collection do
          post :search
        end
      end
    end
  end
end
