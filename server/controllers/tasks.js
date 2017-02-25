var mongoose = require('mongoose');
var {{template}} = mongoose.model('{{template}}')

module.exports = {
    showAll: function (request, response) {
        console.log("{{template}}s ShowAll");
        {{template}}.find({}, function(err, tasks){
          if (err){
            response.json(err);
          }else{
            response.json(tasks);
          }
        })
    },
};
