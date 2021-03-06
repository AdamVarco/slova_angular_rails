class API::V1::TranslationsController < ApplicationController
  before_action :authenticate_user!

  # GET /translations
  def index
    if current_user
      translations = Translation.where(user_id: current_user.id).order('created_at DESC')
    end

    render json: translations
  end

  # POST /translations/search
  def search
    already_in_db = Translation.where(:user_id => current_user.id, :native => params[:search])

    if !already_in_db.empty?
      warning = "You have already saved this translation."
      render json: warning
    else
      pending_translation = translate_service_search

      render json: pending_translation
    end
  end

  # POST /translations
  def create
    native_word = params[:native]
    target_word = params[:target]
    user_id     = params[:user_id]

    word_direction = detect_save_direction(native_word)

    if word_direction == current_user.native_lang
      translation = Translation.new({native: native_word, target: target_word, user_id: user_id})
    else
      translation = Translation.new({native: target_word, target: native_word, user_id: user_id})
    end

    if !Translation.where(:native => translation.native, :user_id => translation.user_id).blank?
      render json: {
        status: 409
      }
    elsif translation.save
      render json: {
        status: 200
      }
    else
      render json: {
        status: 500
      }
    end
  end

  # DELETE /translations/:id
  def destroy
    translation = Translation.find(params[:id])

    unless translation.destroy
      flash.now[:alert] = "Could not delete translation at this time."
    end
  end

  private

  def translate_service_search
    TranslationService.new({
      search: params[:search], 
      native_lang: current_user.native_lang, 
      target_lang: current_user.target_lang
    }).detect_lang
  end

  def detect_save_direction(native_word)
    TranslationService.new({
      native_word: native_word
    }).return_lang
  end
end

