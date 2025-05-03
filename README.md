# ⚽ Premier League 2021/2022 - NoSQL Named Queries Project

## 📚 **Project Overview**

This project focuses on analyzing match data from the English Premier League (season 2021/2022) using MongoDB. We designed a series of named queries to summarize championship results and generate insights that could help configure betting odds for a sports betting application.

The dataset includes match details, scores, player stats, and team performance metrics.

---

## 🛠️ **Named Queries Included**

| Query Name                   | Description                                                                  |
|-----------------------------|------------------------------------------------------------------------------|
| `TotalGoalsByTeam`          | Total number of goals scored by each team during the season.                 |
| `AverageGoalsPerMatch`      | Average number of goals per match over the entire season.                    |
| `WinLossDrawSummaryPerTeam` | Summary of wins, losses, and draws per team.                                |
| `TopScorersOverall`         | Ranking of top goal scorers across all matches.                             |
| `TopHomeAndAwayPerformance` | Comparison of team performance at home vs. away.                            |
| `RecentFormSummary`         | Summary of each team's last 5 matches to assess recent form.                |
| `MostCleanSheetsByGoalkeeper`| List of goalkeepers with the most clean sheets (matches without conceding). |
| `HighestScoringMatches`     | Matches with the highest total number of goals scored.                      |

---

## 📂 **Repository Structure**

```
/ (root)
│
├── named_queries.js          # MongoDB aggregation pipelines for each named query
├── README.md                 # This project description file
└── /data                     # (Optional) Folder with sample match datasets or JSON schemas
```

✅ Place the `named_queries.js` file at the root of the repository for easy access.

---

## 📊 **Recommended Visualizations**

- **Bar Charts** → Top scorers, total goals by team
- **Line Charts** → Trends over time, such as form summaries
- **Tables** → Win/loss/draw summaries
- **Heatmaps** → Team performance home vs away

These visualizations can be used inside the betting application or exported to external dashboards (Power BI, Tableau).

---

## 🔗 **How to Use**

1. Load the Premier League match data into MongoDB.
2. Open the `named_queries.js` file and run the provided aggregation pipelines in the MongoDB shell or Compass.
3. Use the outputs to derive key metrics and feed them into the betting odds configuration system.
4. Optionally, export results for further visualization or machine learning models.

---

## 👨‍💻 **Author**

**Abdirahman Abdillahi**  
Academic project combining NoSQL querying and sports data analytics.  
📧 Contact: [aagd47@gmail.com](mailto:aagd47@gmail.com)  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/abdirahmnabdillahi/)

---

✅ Feel free to fork this repository or adapt the queries for your own sports analytics or betting projects!
