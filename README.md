# React Interview App
## Prerequisites
Ensure that you have [Node.js](https://nodejs.org/en/download/) installed on your machine.

## Installation
Follow the steps below to set up the project on your local machine:
1. Update npm to the latest version: Run `npm install -g npm`
2. Clone this repository: Run `git clone <repository_url>`
3. Navigate into the cloned repository: Run `cd <repository_name>`
4. Install the project dependencies: Run `npm install`
5. Start the project: Run `npm start`
6. View the running application: Load `http://localhost:3000/` in your web browser

## Solution
I used Redux to handle state management in this assignment because it's the statemanegment tool at Roofr and I haven't used it since 2020 and it was time for a refresher!  

There are two reducers:
- `pokemonApi`: fetches and caches the required data from the pokemon APIs and has the following endpoints defined:
  - `getPokemons`
  - `getPokemon`
  - `getMove`
- `battleGround`: Here's how the state is structured for the battle ground
```
  {
    players:[
      {
        name: string
        frontSprite: string
        backSprite: string
        move: string
        power: number
      },
      {
        name: string
        frontSprite: string
        backSprite: string
        move: string
        power: number
      }
    ],
    log: string
    status: "loading" | "ready" | "done"
  }
```

The `useBattle` hook calls the query endpoints from `pokemonApi` to get the required data from the API. Battle ground's status is `loading` during this process.
Once we have two players and their moves fetched, the action `setBattleGround` is dispatched to populate the state for the battle ground including the log sentense to show in the Battle Log.
When battle ground is set then we set its status to `ready`.
When the player clicks the `Start Battle` button, the log sentense is shown in Battle Log box.   

## With more time I would:
- Add tests
- Handle loading and error states properly
- Implement pagination for the `getPokemons` query to get the next page of pokemons when the fetched ones are all used
