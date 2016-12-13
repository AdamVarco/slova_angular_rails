require 'yandex-translator'

class TranslationService
  Translator = Yandex::Translator.new("trnsl.1.1.20161119T173021Z.1a80185b12e93546.c5d53d3668bd71ccf6f3dd88d47428f473c2f467")

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
