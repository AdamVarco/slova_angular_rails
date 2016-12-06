class TranslationsController < ApplicationController
  before_action :set_translation, only: [:show, :update, :destroy]
  # before_action :authenticate_user

  # GET /translations
  def index
    @translations = Translation.order('created_at DESC')

    render json: @translations
  end

  # GET /translations/1
  def show
    render json: @translation
  end

  # POST /translations
  def create
    # respond_to :json

    @new_translation = TranslationService.new({search: params[:search], target_lang: params[:target_lang]})

    @pending = @new_translation.search

    render json: @pending

    # if @new_translation.save
    #   render json: @new_translation, status: :created, location: @new_translation
    # else
    #   render json: @new_translation.errors, status: :unprocessable_entity
    # end
  end

  # PATCH/PUT /translations/1
  def update
    if @translation.update(translation_params)
      render json: @translation
    else
      render json: @translation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /translations/1
  def destroy
    @translation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_translation
      @translation = Translation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def search_params
      params.permit(:search, :target_lang, :format)
    end
end
