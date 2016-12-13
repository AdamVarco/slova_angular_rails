require 'rails_helper'

RSpec.describe TranslationService do
  let(:new_translation) {TranslationService.new({})}
  let(:valid_translation) {TranslationService.new({search: "apple", target_lang: "ru"})}

  describe "#initialize" do
    it "exists" do
      expect(new_translation).to be_truthy
    end

    it "accepts one hash" do
      expect(new_translation.options).to be_instance_of(Hash)
    end

    describe "with attributes" do
      it "assigns translation @options to instance variable" do

        expect(valid_translation).to respond_to(:options)
      end

      it "assigns the proper attributes to the new translation service object" do

        expect(valid_translation.options).to eq({search: "apple", target_lang: "ru"})
      end
    end
  end

  describe "#search" do
    describe "sending search to translation service" do
      it "sends @options to external translation service" do

        expect(valid_translation.search).to be_truthy
      end

      it "receives the valid translation from external translation service" do

        expect(valid_translation.search).to eq("яблоко")
      end
    end

    describe "translating edge-case searches" do
      let(:hello_translation) {TranslationService.new({search: "hello world!", target_lang: "ru"})}
      let(:empty_translation) {TranslationService.new({search: "", target_lang: "ru"})}

      it "translates more than one word" do

          expect(hello_translation.search).to eq("Всем привет!")
      end

      it "returns nothing for empty searches" do

          expect(empty_translation.search).to be_empty
      end
    end
  end
end
