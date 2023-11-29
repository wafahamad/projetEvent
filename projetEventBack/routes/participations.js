const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const Participation = require('../models/participations');
const Participant = require('../models/participant');
const Evenement = require('../models/evenements');

function generateParticipationsId() {
    // Implement your logic to generate a unique reservation number
    // For simplicity, you can use a library like `uuid` or generate a random string
    return Math.random().toString(36).substring(7);
  }


  router.post('/ajout', async (req, res, next) => {
    try {
      const { idP, idE } = req.body;
  
      const participantExists = await Participant.exists({ idP });
      const evenementExists = await Evenement.exists({ idE });
  
      if (!participantExists || !evenementExists) {
        return res.status(404).json({ error: 'Participant , Event not found' });
      }
  
      const participant = await Participant.findOne({ idP });
      const evenement = await Evenement.findOne({ idE });
  
      if (!participant || !evenement) {
        return res.status(404).json({ error: 'Participant or Event not found' });
      }
  
      // Create a new participation with a unique participation id
      const newParticipation = new Participation({
        idE: idE,
        id: generateParticipationsId(),
        date: req.body.date,
        nbPrs: req.body.nbPrs,
        participant: {
          nom: participant.nom,
          idP: participant.idP,
        },
        evenement: {
          idE: evenement.idE,
        }
      });
  
      await newParticipation.save();
  
      res.json(newParticipation);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  router.get('/', async (req, res, next) => {
    try {
      
      const participations = await Participation.find();
      res.json(participations);
    } catch (error) {
      next(error);
    }
  });
  router.get('/participant/:idP', async (req, res, next) => {
    try {
      const idP = req.params.idP;
      const participations = await Participation.find({'participant.idP': idP });
      res.json(participations);
    } catch (error) {
      next(error);
    }
  });
  router.get('/event/:idE', async (req, res, next) => {
    try {
      const idE = req.params.idE;
      const participations = await Participation.find({ 'evenement.idE': idE });
      res.json(participations);
    } catch (error) {
      next(error);
    }
  });
  router.delete('/:id', async (req, res, next) => {
    try {
      const participationId = req.params.id;
      const existingParticipation = await Participation.findOne({ id: participationId });
  
      if (!existingParticipation) {
        return res.status(404).json({ error: 'Participation not found' });
      }
  
      await Participation.findOneAndDelete({ id: participationId });
  
      res.json({ message: 'Participation deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  module.exports = router; 