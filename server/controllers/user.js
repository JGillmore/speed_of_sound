var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
  testUser: function(req,res){
    User.findOne({'name.user':'test'}, function(err, user){
      res.json(user);
    })
  },
  login: function(req,res){
    var user = req.body;
    User.findOne({'name.user':req.body.name.user, 'password':req.body.password}, function(err, loggedIn){
      if(loggedIn){
        res.json(loggedIn);
      }else{
        res.json(err);
      }
    })
  },
  register: function(req,res){
    var user = new User(req.body)
    console.log("\n\n\n\nHOLA1?\n\n\n\n\n");
    user.save(function(err){
      User.findOne(user, function(err, loggedIn){
        res.json(loggedIn);
      })
    })
  },
  checkUserName: function(req,res){
    console.log("\n\n\n\nHOLA2?\n\n\n\n\n");

    User.findOne({'name.user':req.body.userName}, function(err, user){
      if (user){
        res.json({screenName: "taken"})
      }else{
        res.json({screenName: "available"})
      }
    })
  }
};
