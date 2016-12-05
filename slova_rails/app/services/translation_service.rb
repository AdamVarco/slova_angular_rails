require 'yandex-api'

class TranslationService
  include Yandex::API::Translate

  attr_reader :options

  def initialize(params)
    @options = params
    # Set up instance variables for search and target
    return Yandex::API::Translate.do(params[:search], params[:target_lang])
  rescue
    # {error: "Translation request failed"}
  end


end
