
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var BodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'client/build')));
app.use(BodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// Connection URL
// Database Name
const dbName = '';
const parser = { useNewUrlParser: true };
mongoose.connect(url,parser)
.then(() => console.log("db connected"))
.catch((err) => console.log(err));

const User = mongoose.model('User', {firstname:String, lastname:String});


  app.get('/api/getObj', function(req, res){
    User.find({},(req, users)=>{
        let newobj = {};
        let arr=[];
        users.map(user => {
            newobj={
                id: user._id,
                firstname:user.firstname,
                lastname:user.lastname
            }
            arr.push(newobj);
        })
        res.send(arr);
    })
});
  
app.post("/api/myAction", function(req,res){
    const newuser = new User({
        firstname:req.body.fname,
        lastname:req.body.lname
    })
    newuser.save();
});

app.delete("/api/deleteUser/:id",function(req,res,next){
   User
   .findByIdAndRemove(req.params.id)
   .exec()
   .then(doc => {
       if(!doc) return res.status(404).end();
       return res.status(204).end();
    })
    .catch(err => next(err));
   });


app.use(function(req, res){
    res.sendStatus(404);
});
   
var server = app.listen(5000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});

 

    


