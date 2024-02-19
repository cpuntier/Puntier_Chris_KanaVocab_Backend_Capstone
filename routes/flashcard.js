const express = require("express");

const router = express.Router();


const {index, create,destroy, groupIndex} = require("../controllers/flashcard");


router.get("/",index);

router.post("/",create);

router.delete("/id", destroy);

router.get("/groups", groupIndex)

module.exports = router