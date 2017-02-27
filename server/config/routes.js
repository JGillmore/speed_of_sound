var UserController = require('../controllers/user');
var SongController = require('../controllers/song');
var CommentController = require('../controllers/comment');

module.exports = function(app){
  app.post('/login', function(req,res){
    UserController.login(req,res);
  });
  app.post('/register', function(req,res){
    UserController.register(req,res);
  });
  app.post('/checkUserName', function(req,res){
    UserController.checkUserName(req,res);
  });
  app.get('/', function(req, res){
    SongController.showAll(req,res)
  });
  app.post('/upload', function(req, res){
    SongController.upload(req, res)
  });
}
