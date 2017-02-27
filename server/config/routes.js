var UserController = require('../controllers/user');
module.exports = function(app){
  app.post('/login', function(req,res){
    UserController.login(req,res);
  });
  app.post('/checkUserName', function(req,res){
    UserController.checkUserName(req,res);
  });
}
