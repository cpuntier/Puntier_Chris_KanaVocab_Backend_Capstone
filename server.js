// Requiring and configuring the .env file to access its variables 
require("dotenv").config()
// Requiring express
const express = require('express')
// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 8000

const cors = require("cors");


const hiraganaRouter = require("./routes/hiragana");
const katakanaRouter = require("./routes/katakana");
const flashCardRouter = require("./routes/flashcard");

// Configuring the server to accept and parse JSON data.
app.use(express.json())

app.use(cors())


app.use("/hiragana",hiraganaRouter);
app.use("/katakana",katakanaRouter);

// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})