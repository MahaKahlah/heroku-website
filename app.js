const express = require('express');
const path = require('path');
const mongodb = require('mongodb').MongoClient;
const uuid = require('uuid/v4');
const session = require('express-session');

const app = express();
const port = process.env.PORT || 4000;

const dbUrl = 'mongodb+srv://maha:24111998@cluster0-2gatq.mongodb.net/test?retryWrites=true';
const dbName = 'registerDB';


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));


app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

/// Routs
const mainRout = require('./src/routes/mainRout');

const checkUser = require('./src/modules/checkUser');

app.use('/', mainRout);
app.use(session({
      genid: (req, res) => {
        console.log('Inside the session middleware')
        console.log(req.sessionID)
        return uuid() // use UUIDs for session IDs
      },
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true
    }))
    
    app.get('/hi', (req, res) => {
      console.log('Inside the homepage callback function')
      console.log(req.sessionID)
      res.send(`You hit home page!\n`)
    })


app.post('/register', (req, res) => {
      let username = req.body.username;
      let password = req.body.password;
      let rePassword = req.body.rePassword;
      if(password === rePassword){
            (async function mongo() {
                  let client;
                  try {
                        client = await mongodb.connect(dbUrl, { useNewUrlParser: true });
                        const db = client.db(dbName);
                        const response = await db.collection('users').insert(
                              {
                                    userName : username,
                                    pass : password
                              }
                        );
                        //res.send(response)
                        res.redirect('/login');
                  } catch (error) {
                        res.send(error.message);
                  }
                  client.close();
            }());
      }else if(password !== rePassword){
            res.render('register', { checkPass : 'Please be sure that the passwords match together '});
      }else{
            res.send('404');
      }
})


app.post('/login', (req, res) => {
      let username = req.body.email;
      let password = req.body.password;
      checkUser(username, password, (check) => {
            if (check) {
                res.redirect('/admin');
            } else {
                  res.render('login', {login : 'The Email or password are False'});

            }
      })
})

app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
});