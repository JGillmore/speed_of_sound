var mongoose = require('mongoose');

var {{template}}Schema = mongoose.Schema({
  item: String,
},{
  timestamps:true
});

mongoose.model("{{template}}", {{template}}Schema);
