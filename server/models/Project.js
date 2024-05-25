const { default: mongoose } = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status:  {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],

    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId, // pertains to the id of the client model
        ref: 'Client', 
    }
});

module.exports = mongoose.model('Project', ProjectSchema);