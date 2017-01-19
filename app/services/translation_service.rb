require 'yandex-translator'

class TranslationService < ApplicationController
  before_action :authenticate_user!

  Translator = Yandex::Translator.new(ENV["yandex_api_key"])

  attr_reader :options

  def initialize(params)
    @options = params
  rescue => e
    puts e
  end
  
  def detect_lang
    lang = Translator.detect(options[:search])

    if lang == options[:native_lang]
      return search_target
    else
      return search_native
    end 
  end

  def search_target
    Translator.translate(options[:search], from: options[:native_lang], to: options[:target_lang])
  rescue => e
    puts e
  end

  def search_native
    Translator.translate(options[:search], from: options[:target_lang], to: options[:native_lang])
  rescue => e
    puts e
  end
end
