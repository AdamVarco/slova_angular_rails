class TranslationService
  include Yandex::API

  def initialize
    @languages = Translate.languages["langs"]
    p @languages

  end

  def translate(native, target_lang)
    Translate.do(native, target_lang)
  end

end
