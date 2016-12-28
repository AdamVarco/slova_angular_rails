require 'rails_helper'

RSpec.describe API::V1::TranslationsController, type: :routing do
  it { expect(get:    "/api/v1/translations").to   route_to("api/v1/translations#index") }
  it { expect(post:    "/api/v1/translations/search").to route_to("api/v1/translations#search") }
  it { expect(post:   "/api/v1/translations").to   route_to("api/v1/translations#create") }
  it { expect(delete: "/api/v1/translations/1").to route_to("api/v1/translations#destroy", id: "1") }
end
