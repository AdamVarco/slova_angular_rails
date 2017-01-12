FactoryGirl.define do
  factory :user do
    id 1
    email "test@user.com"
    native_lang "en"
    target_lang "ru"
    password "password"
    password_confirmation "password"
    created_at "2016-12-30 20:47:01"
    updated_at "2016-12-30 20:47:34"
  end
end