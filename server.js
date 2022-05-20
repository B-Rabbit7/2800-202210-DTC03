const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
const mongoose = require('mongoose');

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

mongoose.connect("mongodb+srv://terra:studium2022@cluster0.sikkg.mongodb.net/terra?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true });
const accountSchema = new mongoose.Schema({
    user: String,
    pass: String,
    highscore: Number
});
const accountModel = mongoose.model("accounts", accountSchema);

app.get('/', function (req, res) {
    if(req.session.authenticated)
        res.sendFile(__dirname + "/public/pages/main.html")
    else {
        res.sendFile(__dirname + "/public/pages/login.html")
    }
})

app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/public/pages/login.html")
})

app.get('/login/:user/:pass', function (req, res) {
    let username = req.params.user;
	let password = req.params.pass;
    accountModel.findOne({user: username, pass: password}, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        if (data) {
            req.session.authenticated = true;
            req.session.user = username;
            req.session.pass = password;
        }
        res.send(data);
    });
})

app.get('/account', function (req, res) {
    accountModel.findOne({user: req.session.user, pass: req.session.pass}, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        res.send(data);
    });
})

app.get('/highscore/:score', function (req, res) {
    // console.log(req.body)
    accountModel.updateOne({
        username: req.session.user,
        pass: req.session.pass
    },{
        $max: {'highscore': req.params.score}
    } ,function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        res.send("Update request is successful!");
    });
})

app.put('/create/:user/:pass', function (req, res) {
    let username = req.params.user;
	let password = req.params.pass;
    console.log(username, password)
    accountModel.findOne({
        user: username,
        pass: password
    }, function (err, data) {
        if (data) {
            res.send(null);
        } else {
            accountModel.create({
                user: username,
                pass: password,
                highscore: 0
            }, function (err, data) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    console.log("Data " + data);
                }
                res.send(data);
            });
        }
    });
})

app.get('/logout', function (req, res) {
    req.session.authenticated = false;
    res.send("Logout succeeded");
})

app.use(express.static(__dirname + '/public'));
