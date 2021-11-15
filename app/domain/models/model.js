const mongoose = require('mongoose')

const SlinkSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    longUrlEntryCount: {
        type: Number,
        required: true,
        default: 1
    },
    shortUrlRedirectCount: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Url', SlinkSchema);