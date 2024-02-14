const Hiragana = require("../models/Hiragana");

async function index(req,res){
    try {
        const hiragana = await Hiragana.find({});
        if(hiragana){
            res.status(200).send(hiragana);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


async function create(req,res){
    try {
        const createdHiragana = await Hiragana.create(req.body);
        if(createdHiragana){
            res.status(201).send(createdHiragana);
        }
    } catch (error) {
        res.status(400).send(error)       
    }
}

async function destroy(req,res){
    try {
        const deletedBookmark = await Hiragana.findByIdAndDelete(req.params.id);
        if(deletedBookmark){
            res.status(201).send(deletedBookmark);
        }
    } catch (error) {
        res.status(400).send(error)
        
    }
}

module.exports = {
    index,create,destroy
}