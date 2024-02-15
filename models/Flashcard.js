const {Schema, model} = require("../config/db-connection");

const FlashCards = new Schema(
    {
        en_side:{
            type: String,
            required: true,
            unique: true,
        },
        jp_side: {
            type: String,
            required: true,
            unique: true,
        },

    }
)


module.exports = model('flashcards', flashCardsSchema)