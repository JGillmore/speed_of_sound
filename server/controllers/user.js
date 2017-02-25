var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
  login: function(req,res){
    var user = req.body;
    console.log(user);
    User.findOne({name: user.name}, function(err, loggedIn){
      console.log(loggedIn);
      if(loggedIn){
        res.json(loggedIn);
      }else{
        var newUser = new User();
        newUser.name = user.name;
        newUser.save(function(err){
          if(err){
            res.json({err:'err'});
          }else{
            User.findOne({name: user.name}, function(err, loggedIn){
              res.json(loggedIn);
            })
          }
        })
      }
    })
  }
};
