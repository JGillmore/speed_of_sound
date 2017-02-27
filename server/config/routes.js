var UserController = require('../controllers/user');
var SongController = require('../controllers/song');
var CommentController = require('../controllers/comment');
var Upload = require('multer')({dest: 'temp/'})

module.exports = function(app){
  app.post('/login', UserController.login);
  app.post('/register', function(req,res){
    UserController.register(req,res);
  });
  app.post('/checkUserName', function(req,res){
    UserController.checkUserName(req,res);
  });
  app.get('/', function(req, res){
    SongController.showAll(req,res)
  });
  app.post('/upload', Upload.single('file'), SongController.upload)
}
