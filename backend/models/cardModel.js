const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    font: {
        type: String,
        required: true
    },
    fontSize: {
        type: Number,
        required: true
    },
    selectedSVGs: [{
        type: String,
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;