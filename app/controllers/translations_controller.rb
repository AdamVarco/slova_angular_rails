class TranslationsController < ApplicationController
  # before_action :authenticate_user

  # GET /translations
  def index
    @translations = Translation.order('created_at DESC')

    render json: @translations
  end

  # POST /search_translations
  def search
    already_in_db = Translation.find_by(native: params[:search])

    if already_in_db
      @warning = "You already saved this translation!"
      render json: @warning
    else
        @user_search = TranslationService.new({search: params[:search], target_lang: params[:target_lang]})
        @pending_translation = @user_search.search

        render json: @pending_translation
    end
  end

  # POST /translations
  def create
    native_word = params[:native]
    target_word = params[:target]

    @translation = Translation.new({native: native_word, target: target_word})

    if @translation.save
      render json: @translation
    else
      render json: {
        status: 500,
        errors: list.errors
      }
    end
  end

  # DELETE /translations/1
  def destroy
    @translation = Translation.find(params[:id])

    unless @translation.destroy
      flash.now[:alert] = "Could not delete translation at this time."
    end
  end
end
