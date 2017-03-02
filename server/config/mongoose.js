var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/speed_of_sound');

require('../models/user');
require('../models/song');
require('../models/comment');
require('../models/playlist');
