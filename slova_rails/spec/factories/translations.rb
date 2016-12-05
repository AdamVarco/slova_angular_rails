FactoryGirl.define do
  factory :translation do
    id 1
    user_id 1
    native "apple"
    target "яблока"
    display "яблока"
    times_correct 0
    times_incorrect 0
  end
end
