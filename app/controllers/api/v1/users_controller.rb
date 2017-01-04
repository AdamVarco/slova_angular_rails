class API::V1::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:current]
    def current
      @user = current_user
      # puts "errors are: #{@user.errors.to_hash}"
      puts "current user is: #{@user}"
      if @user
        render json: @user, status: :ok
      else
        render json: {errors: 'bad request or current user not found'}, status: 400
      end
    end
end
