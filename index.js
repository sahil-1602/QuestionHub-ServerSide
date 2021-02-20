var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var commentRoutes = require("./routes/commentRoutes");
var questionRoutes = require("./routes/questionRoutes");

//MONGOOSE SETUP
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/kudb', {useNewUrlParser: true});

mongoose.Promise = Promise;

app.get('/', function(req, res){
    res.send("Home page for api!");
})

app.use('/api/question', questionRoutes);
app.use('/api/comment/:questionId', commentRoutes);

app.listen(8000, function(){
    console.log("Api server started");
})

