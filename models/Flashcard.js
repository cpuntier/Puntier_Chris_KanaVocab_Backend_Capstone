const {Schema, model} = require("../config/db-connection");

const FlashCardsSchema = new Schema(
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
        group_name:{
            type: String,
            required: true,
        },

    }
)


module.exports = model('flashcards', FlashCardsSchema)