const express = require('express');

const mainRout = express.Router();

mainRout.route('/').get((req, res) => {
      res.render('index', {home:'active', about:'', blog:'', contact:'', listings:'', loginActive: '', register:''});
})
mainRout.route('/about').get((req, res) => {
      res.render('about', {home:'', about:'active', blog:'', contact:'', listings:'', loginActive: '', register:''});
}) 
mainRout.route('/blog').get((req, res) => {
      res.render('blog', {home:'', about:'', blog:'active', contact:'', listings:'', loginActive: '', register:''});
}) 
mainRout.route('/contact').get((req, res) => {
      res.render('contact', {home:'', about:'', blog:'', contact:'active', listings:'', loginActive: '', register:''});
}) 
mainRout.route('/listings').get((req, res) => {
      res.render('listings', {home:'', about:'', blog:'', contact:'', listings:'active', loginActive: '', register:''});
}) 
mainRout.route('/login').get((req, res) => {
      res.render('login' , {login : '', home:'', about:'', blog:'', contact:'', listings:'', loginActive: 'active', register:''});
}) 
mainRout.route('/register').get((req, res) => {
      res.render('register', {checkPass : '', home:'', about:'', blog:'', contact:'', listings:'', loginActive: '', register:'active'});
}) 
mainRout.route('/admin').get((req, res) => {
      res.render('admin', {home:'', about:'', blog:'', contact:'', listings:'', loginActive: '', register:''});
}) 

module.exports = mainRout;