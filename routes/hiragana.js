const express = require("express");

const router = express.Router();


const {index, create,destroy,createMany, randomDocs} = require("../controllers/hiragana");


router.get("/",index);

router.post("/",create);

router.post("/many",createMany);

router.delete("/romaji", destroy);

router.get("/random",randomDocs);
module.exports = router