const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

var session = require('express-session')

app.use(session({secret: 'ssshhhhh', saveUninitialized: true, resave: true}))

users = {
    "user1": "pass1",
    "user2": "pass2",
}

const port = process.env.PORT || 5000;
app.listen(port, function (err) {
    if (err) console.log(err)
})

app.get('/', function (req, res) {
    if(req.session.authenticated)
        res.send(`Hi ${req.session.user}`)
    else {
        res.sendFile(__dirname + "/public/pages/login.html")
    }
})

app.get('/login', function (req, res, next) {
    res.sendFile(__dirname + "/public/pages/login.html")
})

app.post('/login', function (req, res, next) {
    let username = req.body.username;
	let password = req.body.password;
    if(users[username] == password) {
        req.session.authenticated = true
        req.session.user = username
        res.sendFile(__dirname + "/public/index.html")
    }else{
        req.session.authenticated = false
    }
})

app.use(express.static(__dirname + '/public'));