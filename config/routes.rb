Rails.application.routes.draw do
  constraints format: :json do
    mount_devise_token_auth_for 'User', at: 'auth'

    namespace :api do
      namespace :v1 do
        match 'users/current', to: 'users#current', via: :get
        resources :translations do
          collection do
            post :search
          end
        end
      end
    end
  end
end
