require 'rails_helper'

RSpec.describe TranslationService do
  let(:new_translation_service) {TranslationService.new({})}
  let(:valid_translation) {TranslationService.new({search: "Apple", target_lang: "ru"})}

  it "exists" do
    expect(new_translation_service).to be_truthy
  end

  describe "#initialize" do
    it "accepts one hash" do
      expect(new_translation_service.options).to be_instance_of(Hash)
    end

    describe "with attributes" do
      it "assigns translation @options to instance variable" do

        expect(valid_translation).to respond_to(:options)
      end
    end
  end

  describe "translating with @options" do
    it "assigns the proper attributes to the new translation service object" do

      expect(valid_translation.options).to eq({search: "Apple", target_lang: "ru"})
    end

    it "has a method sending search and target_lang option params to external translation service" do

      expect(valid_translation.search).to be_truthy
    end

    it "receives the valid translation from external translation service" do

      expect(valid_translation.search).to eq("Яблоко")
    end
  end

  describe "translating edge-case searches" do
    let(:hello_translation) {TranslationService.new({search: "Dog", target_lang: "ru"})}
    let(:empty_translation) {TranslationService.new({search: "", target_lang: "ru"})}

    it "translates more than one word" do

        expect(hello_translation.search).to eq("Собака")
    end

    it "returns nothing for empty searches" do

        expect(empty_translation.search).to be_empty
    end
  end
end
