const express = require("express");

const router = express.Router();


const {index, create,destroy} = require("../controllers/hiragana");


router.get("/",index);

router.post("/",create);

router.delete("/romaji", destroy);


module.exports = router