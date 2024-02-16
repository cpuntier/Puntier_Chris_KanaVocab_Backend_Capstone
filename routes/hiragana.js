const express = require("express");

const router = express.Router();


const {index, create,destroy,createMany} = require("../controllers/hiragana");


router.get("/",index);

router.post("/",create);

router.post("/many",createMany);

router.delete("/romaji", destroy);


module.exports = router