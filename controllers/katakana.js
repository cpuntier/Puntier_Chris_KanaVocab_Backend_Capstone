const Katakana = require("../models/Katakana");

async function index(req,res){
    try {
        const katakana = await Katakana.find({});
        if(katakana){
            res.status(200).send(katakana);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


async function create(req,res){
    try {
        const createdKatakana = await Katakana.create(req.body);
        if(createdKatakana){
            res.status(201).send(createdKatakana);
        }
    } catch (error) {
        res.status(400).send(error)       
    }
}

async function destroy(req,res){
    try {
        const deletedKatakana = await Katakana.findByIdAndDelete(req.params.id);
        if(deletedKatakana){
            res.status(201).send(deletedKatakana);
        }
    } catch (error) {
        res.status(400).send(error)
        
    }
}

async function createMany(req, res) {
    const returnArray = []
    try {
        if (Array.isArray(req.body)) {
            req.body.map(async (item) => {
                const createdKatakana = await Katakana.create(item)
                returnArray.push(createdKatakana)
            });
        }
        console.log(returnArray);
        res.status(201).send(returnArray);

    } catch (error) {
        res.status(400).send(error)
    }

}


module.exports = {
    index,create,destroy, createMany
}