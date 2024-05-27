const mongoose = require('mongoose');

//mongoose schema is not related to graph ql schema
// you have the database, and on top of that you have a mongoose layer(object data map layer)
// where we create a schema that includes the fields for our database collection
//On top of that we have our graphQL API, and that is where our graphQL schema plays in

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone:  {
        type: String,

    },
});

module.exports = mongoose.model('Client', ClientSchema);