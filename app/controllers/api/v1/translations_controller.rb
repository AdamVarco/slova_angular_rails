class API::V1::TranslationsController < ApplicationController

  # GET /translations
  def index
    if current_user
      translations = Translation.where(user_id: current_user.id).order('created_at DESC')
    else
      translations = Translation.order('created_at DESC')
    end

    render json: translations
  end

  # POST /search_translations
  def search
    already_in_db = Translation.find_by(native: params[:search])

    if already_in_db
      warning = "You have already saved this translation."
      render json: warning
    else
      pending_translation = TranslationService.new({search: params[:search], target_lang: params[:target_lang]}).search


        render json: pending_translation
    end
  end

  # POST /translations
  def create
    native_word = params[:native]
    target_word = params[:target]
    user_id = params[:user_id]

    translation = Translation.new({native: native_word, target: target_word, user_id: user_id})

    if !Translation.where(:native => translation.native).blank?
      render json: {
        status: 500,
        errors: list.errors
      }
    elsif translation.save
      render json: translation
    else
      render json: {
        status: 500,
        errors: list.errors
      }
    end
  end

  # DELETE /translations/1
  def destroy
    translation = Translation.find(params[:id])

    unless translation.destroy
      flash.now[:alert] = "Could not delete translation at this time."
    end
  end
end
