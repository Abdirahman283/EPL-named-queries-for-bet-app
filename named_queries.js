// named_queries.js

// Total number of matches played
db.epl.find().count()

// List of distinct teams
db.epl.distinct("event_home_team")

// List of distinct referees
db.epl.distinct("event_referee")

// Round 10 match summary
db.epl.find({ "league_round": "Round 10" }, {
    _id: 0,
    event_date: 1,
    event_home_team: 1,
    event_away_team: 1,
    event_final_result: 1
})

// Matches officiated by Michael Oliver
db.epl.find({ "event_referee": "M. Oliver" }).count()

// Number of first-half goals
db.epl.find({ "goalscorers.info_time": "1st Half" }).count()

// Yellow cards by referee A. Marriner
db.epl.find({
    $and: [
        { "event_referee": "A. Marriner" },
        { "cards.card": "yellow card" }
    ]
}).count()

// Team with the most home clean sheets
db.epl.aggregate([
    { $match: { away_team_score: 0 } },
    { $group: { _id: "$event_home_team", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 1 }
])

// Total home goals in wins per team
db.epl.aggregate([
    { $match: { home_team_result: "W" } },
    { $group: { _id: "$event_home_team", total_goals: { $sum: "$home_team_score" } } },
    { $sort: { total_goals: -1 } }
])

// Total goals conceded in home losses per team
db.epl.aggregate([
    { $match: { home_team_result: "L" } },
    { $group: { _id: "$event_home_team", total_conceded: { $sum: "$away_team_score" } } },
    { $sort: { total_conceded: 1 } }
])

// Total yellow cards by A. Marriner using unwind
db.epl.aggregate([
    { $match: { "event_referee": "A. Marriner" } },
    { $unwind: "$cards" },
    { $match: { "cards.card": "yellow card" } },
    { $count: "yellow_card_count" }
])

// Number of wins by Manchester United
db.epl.aggregate([
    { $match: {
        $or: [
            { event_home_team: "Manchester United", home_team_result: "W" },
            { event_away_team: "Manchester United", away_team_result: "W" }
        ]
    } },
    { $count: "total_victories" }
])

// Team with most home wins
db.epl.aggregate([
    { $match: { home_team_result: "W" } },
    { $group: { _id: "$event_home_team", total_wins: { $sum: 1 } } },
    { $sort: { total_wins: -1 } },
    { $limit: 1 }
])

// Team with most away wins and max goals
db.epl.aggregate([
    { $match: { away_team_result: "W" } },
    { $group: { _id: "$event_away_team", total_wins: { $sum: 1 }, max_goals: { $max: "$away_team_score" } } },
    { $sort: { total_wins: -1 } },
    { $limit: 1 }
])

// Total goals by G. Martinelli
db.epl.aggregate([
    { $unwind: "$goalscorers" },
    { $match: {
        $or: [
            { "goalscorers.home_scorer": "G. Martinelli" },
            { "goalscorers.away_scorer": "G. Martinelli" }
        ]
    } },
    { $count: "total_goals" }
])

// Total goals by each team using $lookup
db.epl.aggregate([
    { $lookup: {
        from: "teams",
        localField: "event_home_team",
        foreignField: "team_name",
        as: "home_team_info"
    } },
    { $lookup: {
        from: "teams",
        localField: "event_away_team",
        foreignField: "team_name",
        as: "away_team_info"
    } },
    { $addFields: {
        home_team_name: { $arrayElemAt: ["$home_team_info.team_name", 0] },
        away_team_name: { $arrayElemAt: ["$away_team_info.team_name", 0] }
    } },
    { $group: {
        _id: "$event_home_team",
        home_goals: { $sum: "$home_team_score" },
        away_goals: { $sum: "$away_team_score" }
    } },
    { $addFields: {
        total_goals: { $add: ["$home_goals", "$away_goals"] }
    } },
    { $project: {
        _id: 0,
        team: "$_id",
        total_goals: 1
    } },
    { $sort: { total_goals: -1 } }
])
