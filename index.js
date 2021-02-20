var express               = require("express"),
    app                   = express(),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    User                  = require("./models/user"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    passport              = require("passport");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var commentRoutes = require("./routes/commentRoutes");
var questionRoutes = require("./routes/questionRoutes");
var register = require("./routes/register");
var login = require("./routes/login");

//MONGOOSE SETUP
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/kudb', {useNewUrlParser: true});

mongoose.Promise = Promise;

app.use(require("express-session")({
    secret : "Sahil is going to be one of the best developers in the world",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error       = res.json({message: "error"});
//     res.locals.success     = req.json({message: "success"});
//     next();
// });

app.get('/', function(req, res){
    res.send("Home page for api!");
});

app.get('/users', function(req, res){
    User.find()
    .then(function(users){
        res.json(users);
    })
    .catch(function(err){
        res.json(err);
    })
}); 

app.use('/api/question', questionRoutes);
app.use('/api/comment/', commentRoutes);
app.use('/api/register', register);
app.use('/api/login', login);

app.listen(8000, function(){
    console.log("Api server started");
})

