const express = require("express");

const router = express.Router();


const {index, create,destroy, groupIndex, findGroup} = require("../controllers/flashcard");


router.get("/",index);

router.post("/",create);

router.delete("/id", destroy);

router.get("/groups", groupIndex)

router.get("/groups/:groupName",findGroup)

module.exports = router