const express = require('express');

const mainRout = express.Router();

mainRout.route('/').get((req, res) => {
      res.render('index');
})
mainRout.route('/about').get((req, res) => {
      res.render('about');
}) 
mainRout.route('/blog').get((req, res) => {
      res.render('blog');
}) 
mainRout.route('/contact').get((req, res) => {
      res.render('contact');
}) 
mainRout.route('/listings').get((req, res) => {
      res.render('listings');
}) 
mainRout.route('/login').get((req, res) => {
      res.render('login' , {login : ''});
}) 
mainRout.route('/register').get((req, res) => {
      res.render('register', {checkPass : ''});
}) 
mainRout.route('/admin').get((req, res) => {
      res.render('admin');
}) 

module.exports = mainRout;