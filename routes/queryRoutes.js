// routes/queryRoutes.js
const express = require("express");
const router = express.Router();
const query = require("../controllers/queryController");

// All 12 query routes

router.get("/plays/kannada", query.getKannadaPlays);
router.get("/groups/top", query.getTopGroup);
router.get("/venues/popular", query.getPopularVenues);
router.get("/critics/active", query.getActiveCritics);
router.get("/ratings/genre-average", query.getAvgRatingByGenre);
router.get("/plays/dual-award", query.getDualAwardPlays);
router.get("/actors/multi-play", query.getMultiPlayActors);
router.get("/genres/top", query.getTopGenres);
router.get("/workshops/big", query.getBigWorkshops);
router.get("/critics/strict", query.getStrictCritics);
router.get("/plays/multi-venue", query.getMultiVenuePlays);
router.get("/groups/no-award", query.getAwardlessGroups);

module.exports = router;
