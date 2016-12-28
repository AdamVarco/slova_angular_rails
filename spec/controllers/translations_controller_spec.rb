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

    # describe "POST search" do
    #   context "with valid params" do
    #     let(:valid_search) { search: "Apple", target_lang: "ru" }
    #
    #     it "creates a new search" do
    #       post :search, params: { valid_search }
    #
    #       expect(valid_search.search).to be_truthy
    #     end
    #   end
    #
    #   context "with invalid params" do
    #     let(:empty_search_text) { { search: "", target_lang: "ru" } }
    #     let(:invalid_target_lang) { { search: "Apple", target_lang: "xx" } }
    #
    #     it "does not allow empty searches" do
    #       post :search, params: { empty_search_text }
    #
    #       expect(empty_search_text.search).to raise_error
    #     end
    #
    #     it "does not allow invalid target languages" do
    #       post :search, params: { invalid_target_lang }
    #
    #       expect(invalid_target_lang.search).to raise_error
    #     end
    #   end
    # end

    describe "DELETE destroy" do
      it "successfully deletes requested translation" do
        delete :destroy, params: { id: valid_translation.id }
        count = Translation.where({id: valid_translation.id}).size

        expect(count).to eq 0
      end
    end
  end
end
