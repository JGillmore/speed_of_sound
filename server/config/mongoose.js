var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blackBeltReview');

require('../models/user');
