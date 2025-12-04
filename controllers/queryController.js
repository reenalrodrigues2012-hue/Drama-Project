// controllers/queryController.js
const Play = require("../models/Play");
const Group = require("../models/Group");
const Venue = require("../models/Venue");
const Critic = require("../models/Critic");
const Workshop = require("../models/Workshop");
const Actor = require("../models/Actor");
const Award = require("../models/Award");

// 1. List all plays performed in Kannada language
exports.getKannadaPlays = async (req, res) => {
    const plays = await Play.find({ language: "Kannada" });
    res.json(plays);
};

// 2. Find the group that performed the maximum number of plays
exports.getTopGroup = async (req, res) => {
    const result = await Group.aggregate([
        { $project: { name: 1, playCount: { $size: "$plays" } } },
        { $sort: { playCount: -1 } },
        { $limit: 1 }
    ]);
    res.json(result);
};

// 3. Show venues where more than 3 plays were staged
exports.getPopularVenues = async (req, res) => {
    const venues = await Venue.find({ playsStaged: { $gt: 3 } });
    res.json(venues);
};

// 4. Retrieve critics who reviewed more than 5 plays
exports.getActiveCritics = async (req, res) => {
    const critics = await Critic.find({ reviewedPlays: { $gt: 5 } });
    res.json(critics);
};

// 5. Calculate average audience rating per genre
exports.getAvgRatingByGenre = async (req, res) => {
    const result = await Play.aggregate([
        {
            $group: {
                _id: "$genre",
                avgRating: { $avg: "$audienceRating" }
            }
        }
    ]);
    res.json(result);
};

// 6. Find plays that won both Best Play and Best Script awards
exports.getDualAwardPlays = async (req, res) => {
    const awards = await Award.find({
        category: { $in: ["Best Play", "Best Script"] }
    });

    const playMap = {};

    awards.forEach(a => {
        const play = a.play.toString();
        if (!playMap[play]) playMap[play] = [];
        playMap[play].push(a.category);
    });

    const winningPlayIds = Object.keys(playMap).filter(
        id => playMap[id].includes("Best Play") &&
              playMap[id].includes("Best Script")
    );

    const plays = await Play.find({ _id: { $in: winningPlayIds } });

    res.json(plays);
};

// 7. Show actors who performed in more than one play
exports.getMultiPlayActors = async (req, res) => {
    const actors = await Actor.find({
        plays: { $exists: true, $not: { $size: 1 } }
    });
    res.json(actors);
};

// 8. Identify genres with the most plays staged
exports.getTopGenres = async (req, res) => {
    const result = await Play.aggregate([
        { $group: { _id: "$genre", count: { $sum: 1 } } },
        { $sort: { count: -1 } }
    ]);
    res.json(result);
};

// 9. Retrieve workshops attended by more than 50 participants
exports.getBigWorkshops = async (req, res) => {
    const workshops = await Workshop.find({ participantCount: { $gt: 50 } });
    res.json(workshops);
};

// 10. Show critics who gave ratings below 5 consistently
exports.getStrictCritics = async (req, res) => {
    const critics = await Critic.find({
        "ratings.rating": { $lt: 5 }
    });

    const filtered = critics.filter(c =>
        c.ratings.every(r => r.rating < 5)
    );

    res.json(filtered);
};

// 11. Find plays performed in multiple venues
exports.getMultiVenuePlays = async (req, res) => {
    const plays = await Play.find({ venues: { $exists: true, $not: { $size: 1 } } });
    res.json(plays);
};

// 12. List theatre groups that never won awards
exports.getAwardlessGroups = async (req, res) => {
    const awardedGroups = await Award.distinct("group");

    const groups = await Group.find({
        _id: { $nin: awardedGroups }
    });

    res.json(groups);
};
