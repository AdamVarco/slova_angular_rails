require 'rails_helper'

RSpec.describe Translation, type: :model do
  let(:user) { create(:user) }
  let(:translation) { create(:translation, user: user) }

  it { should belong_to(:user) }

  describe 'attributes' do
    it 'should answer to native' do

      expect(translation.native).to eq("apple")
    end

    it 'should answer to target' do

      expect(translation.target).to be_truthy
    end

    it 'should answer to display' do

      expect(translation.display).to be_truthy
    end

    describe 'defaults' do
      it 'should default translation display value to target value' do

        expect(translation.display).to eq("яблокo")
      end

      it 'sets times_correct and times_incorrect to 0' do

        expect(translation.times_correct && translation.times_incorrect).to eq(0)
      end
    end
  end
end
