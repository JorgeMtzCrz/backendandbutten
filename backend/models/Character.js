const { Schema, model } = require('mongoose')

const characterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    race: {
        type: String,
        required: true
    },
    hair: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'http://1.soompi.io/wp-content/uploads/2015/06/Unidentified-Person-750x450.png'
    }

}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Character', characterSchema)