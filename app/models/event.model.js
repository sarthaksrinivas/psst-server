var mongoose = require('mongoose');

var EventSchema = mongoose.Schema({
    title: String,
    description: String,
    userId: Number,
    lattitude: { type: Number, default: 33.781587 },
    longitude: { type: Number, default: -84.407450 },
    votes: { type: Number, default: 0 },
}, {
        timestamps: true
    });

module.exports = mongoose.model('Event', EventSchema);