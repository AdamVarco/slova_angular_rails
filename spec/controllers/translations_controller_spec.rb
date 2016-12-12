require 'rails_helper'

RSpec.describe TranslationsController, type: :controller do
  let(:translation) { create(:translation) }

  describe "translation instantiation" do
    it "creates new translation" do

        expect(translation).to be_truthy
    end
  end

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
    # TODO Add these specs
  end

  describe "DELETE destroy" do
    it "successfully deletes translations" do
      delete :destroy, params: { id: translation.id }
      count = Translation.where({id: translation.id}).size

      expect(count).to eq 0
    end
  end
end
