require 'rails_helper'

RSpec.describe Translation, type: :model do
  before do
    @translation = FactoryGirl.create(:translation)
  end

  describe 'contents' do
    it 'should answer to native' do

      expect(@translation.native).to eq("apple")
    end

    it 'should answer to target' do

      expect(@translation.target).to eq("яблокo")
    end

    it 'should answer to display' do

      expect(@translation.display).to eq("яблокo")
    end
  end

  describe 'defaults' do
    before do
      @default_translation = Translation.create({native: "House", target: "дома"})
    end

    it 'should default display value to target value' do

      expect(@default_translation.display).to eq("дома")
    end

    it 'sets times_correct and times_incorrect to 0' do

      expect(@default_translation.times_correct && @default_translation.times_incorrect).to eq(0)
    end
  end
end
