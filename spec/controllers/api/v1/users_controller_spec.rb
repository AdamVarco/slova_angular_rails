require 'rails_helper'

RSpec.describe API::V1::UsersController, type: :controller do
    let(:user) { create(:user) }

  describe "GET index" do
    it "returns the user" do
      get :index, format: :json

      expect(user).to_not be_nil
    end
  end
end
