const mongoose = require('mongoose');
const todolistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    schedule_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    items: [listSchema],
    dateAdded: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    strict: true
});

const listSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    strict: true
});

const TodoList = mongoose.model('TodoList', todolistSchema);

module.exports = TodoList