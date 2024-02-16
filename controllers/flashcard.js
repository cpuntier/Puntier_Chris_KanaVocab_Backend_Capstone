const Flashcard = require("../models/Flashcard");

async function index(req,res){
    try {
        const flashcard = await Flashcard.find({});
        if(flashcard){
            res.status(200).send(flashcard);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


async function create(req,res){
    try {
        const createdFlashcard = await Flashcard.create(req.body);
        if(createdFlashcard){
            res.status(201).send(createdFlashcard);
        }
    } catch (error) {
        res.status(400).send(error)       
    }
}

async function destroy(req,res){
    try {
        const deletedFlashCard= await Flashcard.findByIdAndDelete(req.params.id);
        if(deletedFlashCard){
            res.status(201).send(deletedBookmark);
        }
    } catch (error) {
        res.status(400).send(error)
        
    }
}

module.exports = {
    index,create,destroy
}