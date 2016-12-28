Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # , skip: [:omniauth_callbacks]

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
