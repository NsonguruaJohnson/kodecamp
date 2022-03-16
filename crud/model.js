const mongoose = require('mongoose');

Schema = mongoose.Schema;

const crudSchema = new Schema({
    name: {
        type: String,
        required: ['true', 'Name is required'],
        unique: true,
    },
    age: {
        type: Number,
        required: ['true', 'Number is required'],
    },
    message: {
        type: String,
        required: ['true', 'Message is required']
    },
    createDate: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model('Crud', crudSchema);
