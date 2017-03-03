var UserController = require('../controllers/user');
var SongController = require('../controllers/song');
var PlaylistController = require('../controllers/playlist');
var CommentController = require('../controllers/comment');
var Upload = require('multer')({dest: 'temp/'})

module.exports = function(app){
  app.post('/login', UserController.login);
  app.post('/addToPlaylist', PlaylistController.addToPlaylist);
  app.post('/getPlaylist', PlaylistController.getPlaylist);
  app.post('/commentSong', SongController.addComment);
  app.get('/songs', SongController.allSongs);
  app.get('/test', UserController.testUser);
  app.get('/profile',function(req,res){
    UserController.showAll(req,res)
  });
  app.post('/register', function(req,res){
    UserController.register(req,res);
  });
  app.post('/checkUserName', function(req,res){
    UserController.checkUserName(req,res);
  });
  app.post('/getfollowing', UserController.getfollowing);
  app.get('/', function(req, res){
    SongController.showAll(req,res);
  });
  app.post('/upload', Upload.any(), SongController.upload);
  app.post('/uploadimg',Upload.single('file'),UserController.upload);
  app.get('/users', function(req,res){
    UserController.showAll(req,res);
  });
}
