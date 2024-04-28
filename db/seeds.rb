# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#Quiz.create(
  #user_id: 1,
  #quiz_select: 1,
  #animal_quiz: 0,
  #fish_quiz:0,
  #dinosaur_quiz: 0
#)

Place.create([
  {
  picture_id: 1,
  adress: "大阪府南河内郡河南町白木１４５６−２",
  name: "ワールド牧場",
  url: "http://www.worldranch.co.jp/"
},
{
  picture_id: 1,
  adress: "千葉県袖ケ浦市永吉４１９",
  name: "東京ドイツ村",
  url: "https://www.t-doitsumura.co.jp/"
}
])