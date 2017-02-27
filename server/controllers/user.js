var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = {
  login: function(req,res){

  },
  checkUserName: function(req,res){
    User.findOne({name: {user:req.body.userName}}, function(err, user){
      if (user){
        res.json({screenName: "taken"})
      }else{
        res.json({screenName: "available"})
      }
    })
  }
};
