require 'rails_helper'

RSpec.describe TranslationsController, type: :routing do
  it { expect(get:    "/translations").to   route_to("translations#index") }
  it { expect(post:    "/translations/search").to route_to("translations#search") }
  it { expect(post:   "/translations").to   route_to("translations#create") }
  it { expect(delete: "/translations/1").to route_to("translations#destroy", id: "1") }
end
