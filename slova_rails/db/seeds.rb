# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'random-word'

random_russian_words = ["красный", "зеленый", "синий", "желтый", "багровый", "мятный", "белый", "черный", "оранжевый", "розовый", "серый", "фиолетовый", "бирюзовый", "небесно голубой", "орхидный", "оливковый", "пурпурный", "лимонный", "кремовый", "золотой", "голубой", "лазурный", "лиловый", "серебряный"]

50.times do |i|
  Translation.create!(
    native: RandomWord.adjs.next,
    target: random_russian_words.sample,
    created_at: Time.now,
    display: '',
    times_correct: 0,
    times_incorrect: 0
  )
end
