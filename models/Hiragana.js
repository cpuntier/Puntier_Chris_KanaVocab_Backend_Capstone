const {Schema, model} = require("../config/db-connection");

const hiraganaSchema = new Schema(
    {
        en_romaji:{
            type: String,
            required: true,
            unique: true,
        },
        jp_kana: {
            type: String,
            required: true,
            unique: true,
        },
        audio:{
            type: String,
        },

    }
)


module.exports = model('Hiragana', hiraganaSchema)