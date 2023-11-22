const express = require('express');
const router = express.Router();
const Participant = require('../models/participant');

router.get('/', async (req, res) => {
    try {
        const participants = await Participant.find();
        res.json(participants);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
// Récupérer un participant par son ID
router.get('/:idP', async (req, res) => {
    try {
      const participant = await Participant.findOne({ idP: req.params.idP });
      if (!participant) {
        return res.status(404).json({ message: 'participant non trouvé' });
      }
      res.json(participant);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Créer un nouvel participant nahiha 
  router.post('/ajout', async (req, res) => {
    const participant = new Participant({
       idP: req.body.idP,
      nom: req.body.nom,
      prenom: req.body.prenom,
      age: req.body.age,
      cin: req.body.cin,
      e_mail: req.body.e_mail,
      pwd: req.body.pwd,
      
    });
  
    try {
      const nouveauParticipant = await participant.save();
      res.status(201).json(nouveauParticipant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Mettre à jour un participant par son ID
  router.put('/:idP', async (req, res) => {
    try {
      const participant = await Participant.findOne({ idP: req.params.idP });
      if (!participant) {
        return res.status(404).json({ message: 'participant non trouvé' });
      }
  
      participant.nom = req.body.nom;
      participant.prenom = req.body.prenom;
      participant.age = req.body.age;
      participant.cin = req.body.cin;
      participant.e_mail = req.body.e_mail;
      participant.pwd = req.body.pwd;
      
  
      const ParticipantMiseAJour = await participant.save();
      res.json(ParticipantMiseAJour);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Supprimer un participant par son ID
  router.delete('/:idP', async (req, res) => {
    /*try {
      const evenement = await Evenement.findOne({ id: req.params.id });
      if (!evenement) {
        return res.status(404).json({ message: 'Événement non trouvé' });
      }
  
      await evenement.remove();
      res.json({ message: 'Événement supprimé avec succès' });
    } */ try {
      const participantId = req.params.idP;
  
      
      const participant = await Participant.findByIdAndDelete(participantId);
     
  
      if (!participant) {
        return res.status(404).send('participant non trouvé');
      }
  
      res.json({ message: 'participant supprimé avec succès' });
    } 
    catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  module.exports = router;    