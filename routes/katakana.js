const express = require("express");

const router = express.Router();


const {index, create,destroy,createMany,randomDocs} = require("../controllers/katakana");


router.get("/",index);

router.post("/",create);

router.delete("/romaji", destroy);

router.post("/many",createMany);

router.get("/random",randomDocs)
module.exports = router