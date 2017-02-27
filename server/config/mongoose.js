var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/speed_of_sound');

require('../models/user');
