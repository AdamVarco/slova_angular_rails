require 'rails_helper'

RSpec.describe API::V1::TranslationsController, type: :controller do
  let(:valid_translation) { create(:translation) }
  let(:invalid_translation) { build(:invalid_translation)}

  context "translations" do

    describe "GET index" do
      it "returns http success" do
        get :index, :format => :json

        expect(response).to have_http_status(:success)
      end

      it "renders the index of translations in json" do
        get :index
        JSON.parse(response.body)

        expect(response).to be_success
      end
    end

    describe "POST search" do
      context "with valid params" do
        let(:valid_search) {TranslationService.new({search: "Apple", target_lang: "ru"})}

        it "creates a new pending search" do

          expect(valid_search.search).to be_truthy
        end
      end
    end

    describe "POST create" do
      context "duplicate translations" do
        it "does not allow duplicate translations" do
          first_translation = Translation.new({native: "Apple", target: "Яблоко"})
          duplicate_translation = Translation.new({native: "Apple", target: "Яблоко"})
          first_translation.save

          expect(duplicate_translation.save).to be_instance_of(error)
        end
      end
    end

    describe "DELETE destroy" do
      it "successfully deletes requested translation" do
        delete :destroy, params: { id: valid_translation.id }
        count = Translation.where({id: valid_translation.id}).size

        expect(count).to eq 0
      end
    end
  end
end
