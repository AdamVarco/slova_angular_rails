require 'rails_helper'

RSpec.describe API::V1::TranslationsController, type: :controller do
  let(:user) { create(:user) }
  let(:valid_translation) { create(:translation) }
  
  before do
    allow(controller).to receive(:authenticate_user!).and_return(true)
    allow(controller).to receive(:current_user).and_return(user)
  end

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
        let(:valid_search) {TranslationService.new({search: "Apple", native_lang: "en", target_lang: "ru"})}

        it "creates a new pending search" do

          expect(valid_search.search).to be_truthy
        end
      end
    end

    describe "POST create" do
      context "with valid params" do
        it "creates a new translation" do
          post :create, params: { user_id: valid_translation.user_id, native: valid_translation.native, target: valid_translation.target }

          expect(Translation.count).to be(1)
        end
      end

      context "with invalid params" do
        it "does not save invalid translation" do
          invalid_translation = Translation.new({ user_id: valid_translation.user_id, native: valid_translation.native, target: "" })

          expect(invalid_translation.save).to be(false)
        end
      end

      context "duplicate translations" do
        it "does not allow duplicate translations" do
          first_translation = Translation.new({native: "Apple", target: "Яблоко"})
          duplicate_translation = Translation.new({native: "Apple", target: "Яблоко"})
          first_translation.save

          expect(duplicate_translation.save).to be false
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
