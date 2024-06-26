# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"

pin "bingo_ruret1"
pin "bingo_ruret2"
pin "index"
pin "show"
pin "mode"
pin "quiz_new"
pin "quiz_play"
pin "quiz_save"