const { Schema, model } = require("../config/db-connection");

const katakanaSchema = new Schema(
    {
        en_romaji: {
            type: String,
            required: true,
            unique: true,
        },
        jp_kana: {
            type: String,
            required: true,
            unique: true,
        },
        // audio:{
        //     type: String,
        // },
        row: {
            type: Number,
            required: true
        },
        column: {
            type: Number,
            required: true
        }

    }
)



module.exports = model('Katakana', katakanaSchema)