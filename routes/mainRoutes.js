const express = require('express');
const router = express.Router();

// Import all controllers
const { createPlay } = require('../controllers/playController');
const { createGroup } = require('../controllers/groupController');
const { createVenue } = require('../controllers/venueController');
const { createCritic } = require('../controllers/criticController');
const { createActor } = require('../controllers/actorController');
const { createWorkshop } = require('../controllers/workshopController');

// ---- PLAY ROUTE ----
router.post('/plays', createPlay);

// ---- THEATRE GROUP ROUTE ----
router.post('/groups', createGroup);

// ---- VENUE ROUTE ----
router.post('/venues', createVenue);

// ---- CRITIC ROUTE ----
router.post('/critics', createCritic);

// ---- ACTOR ROUTE ----
router.post('/actors', createActor);

// ---- WORKSHOP ROUTE ----
router.post('/workshops', createWorkshop);

module.exports = router;
