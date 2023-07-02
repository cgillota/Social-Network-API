const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/SocialDB',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection