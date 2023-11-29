const mongoose = require('mongoose');

const organisationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
      pwd: {
        type: String,
        required: true,
      },
});
module.exports = mongoose.model('Organisation', organisationSchema);