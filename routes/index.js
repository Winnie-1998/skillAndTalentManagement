const express = require('express');

const route = express.Router()


route.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })

});
route.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = route