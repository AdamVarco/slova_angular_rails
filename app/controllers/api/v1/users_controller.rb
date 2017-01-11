class API::V1::UsersController < ApplicationController
  before_action :authenticate_user!

    def index
      @user = current_user

      if @user
        render json: @user, status: :ok
      else
        render json: {errors: 'bad request or current user not found'}, status: 400
      end
    end

    def update
      native_lang = params[:native_lang]
      target_lang = params[:target_lang]

      @user = current_user

      @user.native_lang = native_lang
      @user.target_lang = target_lang

      if @user.save
        render json: @user
      else
        render json: {
        status: 500,
        errors: errors
      }
      end
    end
end
