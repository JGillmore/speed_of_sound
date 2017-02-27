var mongoose = require('mongoose');
var Song = mongoose.model('Song')

module.exports = {
  upload: function(req,res){
    console.log(req.body);
    console.log(req.file);
  },
};
