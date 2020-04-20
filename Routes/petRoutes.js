const express = require('express');
const router = express.Router();
const petController = require('../Controllers/petController');

router.get('/:id', petController.getPetById);

router.post('/', petController.createPet);

router.put('/:id', petController.updatePet);

router.delete('/:id', petController.deletePet);

module.exports = router;
