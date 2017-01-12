require 'rails_helper'

RSpec.describe User, type: :model do
  describe "db structure" do
    it { is_expected.to have_db_column(:email).of_type(:string) }
    it { is_expected.to have_db_column(:native_lang).of_type(:string) }
    it { is_expected.to have_db_column(:target_lang).of_type(:string) }
  end

  describe "validations" do
    it { is_expected.to validate_presence_of(:email) }
  end
end
