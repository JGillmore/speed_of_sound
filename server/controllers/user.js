var mongoose = require('mongoose');
var User = mongoose.model('User');
async = require('async');


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
  },
  getfollowing: function(req,res){
    var thefollower = req.body.follower;
    var obj = [];
    User.findOne({_id: thefollower}),function(err, user){
      if(err){
        console.log(err);
        res.json(err);
      }else{
        var following = user.following;
        async.forEach(following, function(item, callback){
          var user = item;
          User.findOne({_id: user}, function(err, follower, callback){
            var id = follower._id;
            var pic = follower.pic;
            obj.push({
              id: id,
              pic: pic
            })
          })
          console.log(obj);
          callback();
      },function(err){
        console.log(obj);
        res.json(obj);
      })
    }
  }
}
}
