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
    user.save(function(err){
      User.findOne(user, function(err, loggedIn){
        res.json(loggedIn);
      })
    })
  },
  checkUserName: function(req,res){
    User.findOne({'name.user':req.body.userName}, function(err, user){
      if (user){
        res.json({screenName: "taken"})
      }else{
        res.json({screenName: "available"})
      }
    })
  }
};
