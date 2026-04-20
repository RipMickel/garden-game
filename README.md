🌱 Garden Clicker Game

A simple but strategic browser-based farming game where you plant, water, and harvest crops to earn coins before time runs out. Progress through levels as the challenge increases.

🎮 Features

🌿 Multiple plant types with different growth speeds and rewards

💧 Water management system

⏱️ Timed levels with increasing difficulty

💰 Coin-based economy (planting costs resources)

📈 Level progression with scaling targets

🪴 Interactive grid-based garden

⚡ Fast-paced decision making (plant, water, harvest)

🚀 How to Run

Add this script to an HTML file that includes:

A container with id="garden"

A stats display with id="stats"

A game info display with id="gameInfo"


No external libraries or setup required.

🕹️ How to Play

Select a plant type (e.g., fast, balanced, high).

Click an empty plot to plant.

While growing:

Click again to water (speeds up growth)

Once fully grown:

Click to harvest and earn coins 💰

Reach the target coins before time runs out to advance.

🌾 Plant Types

Type	Emoji	Grow Time	Value	Cost

Fast	🌿	1.5s	2	1

Balanced	🌱	2.5s	4	2

High Value	🌻	4s	8	4

🧠 Gameplay Mechanics

🌱 Planting

Costs coins

Starts growth timer

💧 Watering

Speeds up plant growth

Consumes water resource

Water regenerates automatically over time

✨ Growth Cycle

🌿 Growing

✨ Ready to harvest

💀 Dead (if not harvested in time)

💰 Harvesting

Collect coins based on plant type

Resets plot to empty

⏱️ Level System

Each level:

Has a time limit

Requires a target number of coins

Difficulty increases:

Less time

Higher coin targets

⚙️ Core Mechanics

Water Regen: +1 water every 2 seconds (max 10)

Plot Grid: 25 clickable tiles

Win Condition: Reach target coins before time runs out

Lose Condition: Timer hits 0

🧩 Code Structure

Game State

Coins, water, level, timer

Plant System

Defined plant types with stats

Grid System

Dynamic plot creation and interaction

Timers

Growth timers

Decay timers

Game loop timer

UI Updates

Real-time stat tracking



🛠️ Customization Ideas

Add more plant types 🌸

Introduce upgrades (faster growth, more yield)

Add pests or random events 🐛

Include sound effects/music 🎵

Save progress with localStorage

Add animations or CSS transitions

Mobile-friendly UI

📌 Known Limitations

No save system

No animations (basic emoji visuals)

No pause feature

UI must be manually set up in HTML


📄 License
Free to use and modify for personal or educational projects.
