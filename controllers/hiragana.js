const Hiragana = require("../models/Hiragana");

async function index(req, res) {
    try {
        const hiragana = await Hiragana.find({});
        if (hiragana) {
            res.status(200).send(hiragana);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}


async function create(req, res) {
    try {
        const createdHiragana = await Hiragana.create(req.body);
        if (createdHiragana) {
            res.status(201).send(createdHiragana);
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

async function destroy(req, res) {
    try {
        const deletedHiragana = await Hiragana.findByIdAndDelete(req.params.id);
        if (deletedHiragana) {
            res.status(201).send(deletedHiragana);
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
                const createdHiragana = await Hiragana.create(item)
                returnArray.push(createdHiragana)
            });
        }
        res.status(201).send(returnArray);

    } catch (error) {
        res.status(400).send(error)
    }

}

module.exports = {
    index, create, destroy, createMany
}