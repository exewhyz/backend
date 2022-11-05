const mongoose = require('mongoose');

const UserSchema = new Schema({
    title: {
        type: string,
        required: true
    },
    decsription: {
        type: string,
        required: true
    },
    tag: {
        type: string,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('notes', NOtesSchema);