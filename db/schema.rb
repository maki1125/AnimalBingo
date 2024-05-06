# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_05_06_141427) do
  create_table "authentications", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "provider", null: false
    t.string "uid", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["provider", "uid"], name: "index_authentications_on_provider_and_uid"
  end

  create_table "contacts", charset: "utf8mb4", force: :cascade do |t|
    t.text "content"
    t.date "resolved_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "infomations", charset: "utf8mb4", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "modes", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "play_mode"
    t.integer "picture_mode"
    t.integer "level_mode"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_modes_on_user_id", unique: true
  end

  create_table "pictures", charset: "utf8mb4", force: :cascade do |t|
    t.string "name"
    t.string "img"
    t.text "youtube_url"
    t.string "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "upload"
  end

  create_table "places", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "picture_id", null: false
    t.string "adress"
    t.string "name"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["picture_id"], name: "index_places_on_picture_id"
  end

  create_table "quizzes", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id"
    t.integer "quiz_select"
    t.integer "animal_quiz"
    t.integer "fish_quiz"
    t.integer "dinosaur_quiz"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "ok_num"
    t.integer "new_num"
    t.index ["user_id"], name: "index_quizzes_on_user_id", unique: true
  end

  create_table "user_pictures", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "picture_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["picture_id"], name: "index_user_pictures_on_picture_id"
    t.index ["user_id"], name: "index_user_pictures_on_user_id"
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "email", null: false
    t.string "crypted_password"
    t.string "salt"
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_confirmation"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "modes", "users"
  add_foreign_key "places", "pictures"
  add_foreign_key "quizzes", "users"
  add_foreign_key "user_pictures", "pictures"
  add_foreign_key "user_pictures", "users"
end
