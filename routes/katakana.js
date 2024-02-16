const express = require("express");

const router = express.Router();


const {index, create,destroy,createMany} = require("../controllers/katakana");


router.get("/",index);

router.post("/",create);

router.delete("/romaji", destroy);

router.post("/many",createMany);

module.exports = router