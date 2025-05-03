# ⚽ Premier League 2021/2022 - NoSQL Named Queries Project

## 📚 **Project Overview**

This project focuses on analyzing match data from the English Premier League (season 2021/2022) using MongoDB. We designed a series of named queries to summarize championship results and generate insights that could help configure betting odds for a sports betting application.

The dataset includes match details, scores, player stats, referees, and team performance metrics.

---
## ℹ️ **About the Source/dataset**
**Kaggle: English Premier League data- 2021/2022**

Contents:
 * Results of each game
 * Scores and number of goals scored
 * Highlights (fouls, yellow cards)
 * Match statistics (possession, attack, etc.)
  
Link: [click here](https://www.kaggle.com/datasets/oyedapson/english-premier-league-data-20212022)

---
## 🛠️ **Named Queries Included**

| Query Name                         | Description                                                                                 |
|-------------------------------------|---------------------------------------------------------------------------------------------|
| `TotalMatchesCount`                | Total number of matches played during the season.                                           |
| `DistinctTeamsList`                | List of teams participating in the championship.                                            |
| `DistinctRefereesList`             | List of referees who officiated during the season.                                          |
| `Round10MatchSummary`              | Date, teams, and final score for Round 10 matches.                                          |
| `MichaelOliverMatchCount`          | Number of matches officiated by referee Michael Oliver.                                     |
| `FirstHalfGoalsCount`             | Number of goals scored during the first half of matches.                                    |
| `YellowCardsByMarrinerCount`       | Number of yellow cards given by referee A. Marriner.                                        |
| `MostHomeCleanSheetsTeam`          | Team with the highest number of clean sheets (no goals conceded) at home.                  |
| `TopHomeGoalsInWins`               | Total home goals per team in winning matches, sorted by highest totals.                     |
| `LowestConcededGoalsInLosses`      | Total goals conceded at home per team in losing matches, sorted by lowest totals.           |
| `YellowCardCountByMarriner`        | Total count of yellow cards attributed by A. Marriner (aggregation with unwind).            |
| `ManchesterUnitedWinCount`         | Number of matches won by Manchester United (home or away).                                  |
| `TopHomeWinsTeam`                  | Team with the most home match victories.                                                    |
| `TopAwayWinsWithMaxGoals`          | Team with the most away match victories and highest goals scored in those wins.             |
| `GoalsByPlayer_GMartinelli`        | Number of goals scored by G. Martinelli.                                                   |
| `TotalGoalsByTeamWithLookup`       | Total number of goals scored by each team using `$lookup` with the `teams` collection.      |

---

## 📂 **Repository Structure**

```
/ (root)
│
├── named_queries.js          # MongoDB aggregation pipelines and queries for each named query
├── README.md                 # This project description file
└── /data                     # Folder with sample match datasets or JSON schemas
```

✅ Place the `named_queries.js` file at the root of the repository for easy access.

---

## 📊 **Recommended Visualizations**

- **Bar Charts** → Top scorers, total goals by team, yellow card counts
- **Line Charts** → Match trends over rounds or recent form
- **Tables** → Match summaries, referee activity summaries
- **Heatmaps** → Home vs away performance by team

These visualizations can be used in a betting application or exported to external dashboards (Power BI, Tableau).

---

## 🔗 **How to Use**

1. Load the Premier League match data into your MongoDB database.
2. Open the `named_queries.js` file and run the provided aggregation pipelines in MongoDB Compass or the shell.
3. Use the outputs to derive key metrics for betting odds configuration and performance analysis.
4. Optionally, export the query results for visualization or integration into analytics tools.

---

## 👨‍💻 **Author**

**Abdirahman Abdillahi**  
Academic project combining NoSQL querying and sports data analytics.  
📧 Contact: [aagd47@gmail.com](mailto:aagd47@gmail.com)  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/abdirahmnabdillahi/)

---

✅ Feel free to fork this repository or adapt the queries for your own sports analytics or betting projects!
