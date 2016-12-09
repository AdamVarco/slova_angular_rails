require 'rails_helper'

RSpec.describe TranslationsController, type: :controller do
  before do
    @translation = FactoryGirl.create(:translation)
  end

  describe "translation instantiation" do
    it "creates new translation" do

        expect(@translation).to be_truthy
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
      
  end
end
