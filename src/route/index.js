// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  return res.render('index', {
    name: 'index',

    component: [''],

    title: 'Index page',

    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})
//===================================
router.get('/home', function (req, res) {
  return res.render('home', {
    name: 'home',
    title: 'Home page',
    data: {},
  })
})
//===================================
router.get('/logout', function (req, res) {
  return res.render('logout', {
    name: 'logout',
    title: 'Logout page',
    data: {},
  })
})
// Підключіть файли роутів
const auth = require('./auth')
// Підключіть інші файли роутів, якщо є
const user = require('./user')

// Об'єднайте файли роутів за потреби
router.use('/', auth)
// Використовуйте інші файли роутів, якщо є
router.use('/', user)

// Експортуємо глобальний роутер
module.exports = router
