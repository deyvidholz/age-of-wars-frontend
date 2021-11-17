<h1 align="center"> 
	🗺️ Age of Wars 🗺️
</h1>

<h1 align="center">
  <img alt="In game" src="https://i.ibb.co/gDXRGR6/in-game.png" />
</h1>

# 📝 TL;DR

- Change default API URL in `src/main.js`, `src/store/index.js` and `src/plugins/axios.js`.
- Use `npm install` to install dependencies.
- Use `npm run serve` to start the project (development mode).

# 📜 Description

Age of Wars is a single/multiplayer strategy game that uses `Node`, `Vue` and `Socket.io`.
You start by choosing a country and then you can conquer all the world or make your country
the richest/strongest.

There are currently 149 countries available to play with.

# ➕ Installation / Requirements

These tecnologies listed below are required to run the project properly:

- Age of Wars API
- Node (tested with Node v14.17)
- NPM (tested with v6.14)

In order to install the dependencies, use `npm install`.

# 🚀 Running the app (development mode)

After install the dependencies, you can run the app by running `npm run serve`

# 🖼️ Game Images

<h2 align="center"> 
	Left Sidebar (Player Actions)
</h2>

<h1 align="center">
  <img alt="Player Actions" src="https://i.ibb.co/vY75Xx3/left-sidebar.png" />
</h1>

<h2 align="center"> 
	Right Sidebar (Target Info)
</h2>

<h1 align="center">
  <img alt="Target Information" src="https://i.ibb.co/tDvHdhd/sending-ally-reques" />
</h1>

<h2 align="center"> 
	Province Info
</h2>

<h1 align="center">
  <img alt="Province Information Card" src="https://i.ibb.co/x1mFY98/province-info.png" />
</h1>

<h2 align="center"> 
	Rankings
</h2>

<h1 align="center">
  <img alt="Economy Ranking" src="https://i.ibb.co/rZNntXC/economy-ranking.png" />
</h1>

<h1 align="center">
  <img alt="Military Ranking" src="https://i.ibb.co/dpLdFQN/military-ranking.png" />
</h1>

<h2 align="center"> 
	Focus
</h2>

<h1 align="center">
  <img alt="Focus Card" src="https://i.ibb.co/hBs7yV7/focus.png" />
</h1>

<h2 align="center"> 
	Declare War
</h2>

<h1 align="center">
  <img alt="Relations Card - Declare War" src="https://i.ibb.co/q77g1SC/declaring-war.png" />
</h1>

<h2 align="center"> 
	Send Ally Request
</h2>

<h1 align="center">
  <img alt="Send Ally Request" src="https://i.ibb.co/tDvHdhd/sending-ally-request.png" />
</h1>

<h2 align="center"> 
	Provinces conquered
</h2>

<h1 align="center">
  <img alt="Provinces Conquered" src="https://i.ibb.co/crFw0Yd/provinces-conquered.jpg" />
</h1>

# Glossary

| Term                | Meaning                                                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Action              | Actions are made by players and bots (AI), an action can be `declare war`, `improve province`, etc                                                    |
| Aggressiveness      | Aggressiveness points show how much aggressive a country is. The more aggressive a country is, more chances of a coalition being created against them |
| Coalition           | A type of alliance created by countries against countries that are too much aggressive                                                                |
| Decisions           | Options for a country to accept or not alliances, demand provinces after win wars, etc                                                                |
| Focus               | Focus gives to your country new passives that can increase your economy incomings or MP                                                               |
| MP (Military Power) | Your country's power in wars. Couting with all your army                                                                                              |
| Passive             | Passives increase or decrease your economy incoming, power, etc                                                                                       |
| Personality         | Define if the countries controlled by AI will be a pacific or aggressive country, making less or more wars                                            |
| Province            | A territory controlled by a country that gives money and produces oil                                                                                 |

# ⚠️ Note

This project still under development, bugs can be faced while playing, however, you can play the game yet.

# To Do

- [ ] Create `.env` file
- [ ] Improve code quality, reduce duplicated code, add components
- [ ] Add Missions
- [ ] Add Game Event Log
- [ ] Add Cheats (Console)
- [ ] Add Send Resources action
- [ ] Add Sound Effects
