const NoteSchema = require("../models/noteSchema");

const getAll = async (req, res) => {
    try {
        const notes = await NoteSchema.find();
        res.status(200).send(notes);
    } catch(err) {
        res.status(500).send({
            "message": err
        })
    }
};


module.exports = {
    getAll
}