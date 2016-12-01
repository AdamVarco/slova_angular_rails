class TranslationService
  require 'yandex-api'
  Yandex::API::Translate

  def initialize(params)
    return Yandex::API::Translate.do(params[:search], params[:target_lang])
  end

end
