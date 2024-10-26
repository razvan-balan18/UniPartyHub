import express from "express"
import { Party } from "../models/partyModel.js"

const router = express.Router();

// create
router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.place || !req.body.date || !req.body.image) {
            return res.status(400).send({
                message: 'Send all required fields: name, place, date, image'
            });
        }
        const newParty = {
            name: req.body.name,
            place: req.body.place,
            budget: req.body.budget,
            date: new Date(req.body.date), 
            image: req.body.image,
            people: req.body.people || [],  
            tasks: req.body.tasks || []      
        };

        const party = await Party.create(newParty);

        return res.status(201).send(party);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// get
router.get('/', async (req, res) => {
    try {
        const partys = await Party.find({});
        return res.status(200).json({
            count: partys.length,
            data: partys,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// get with id
router.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const party = await Party.findById(id);

        return res.status(200).json(party);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// update
router.put('/:id', async (req, res) => {
    try {

        if (!req.body.name || !req.body.place || !req.body.date || !req.body.image) {
            return res.status(400).send({
                message: 'Send all required fields: name, place, date, image',
            });
        }

        const { id } = req.params;

        const result = await Party.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Party not found' });
        }

        return res.status(200).send({ message: 'Party updated' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// delete
router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Party.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Party not found' });
        }

        return res.status(200).send({ message: 'Party deleted' });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;