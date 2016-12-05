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
end
