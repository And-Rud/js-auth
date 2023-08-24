// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  res.render('index', {
    name: 'index',

    component: [''],

    title: 'Home page',

    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})
// Підключіть файли роутів
const auth = require('./auth')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', auth)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
