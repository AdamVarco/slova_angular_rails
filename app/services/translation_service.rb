require 'yandex-translator'

class TranslationService
  Translator = Yandex::Translator.new(ENV["yandex_api_key"])

  attr_reader :options

  def initialize(params)
    @options = params
  rescue => e
    puts e
  end

  def search
    t = Translator.translate(options[:search], options[:target_lang])
  rescue => e
    puts e
  end

  def langs
    return Translator.langs
  end
end
