require 'rails_helper'

RSpec.describe User, type: :model do
  describe "db structure" do
    it { is_expected.to have_db_column(:email).of_type(:string) }
    it { is_expected.to have_db_column(:created_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:updated_at).of_type(:datetime) }
    it { is_expected.to have_db_column(:auth0_id_string).of_type(:string) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:email) }
  end
end
