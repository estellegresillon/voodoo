# Voodoo Test

## Available Scripts

In the project directory, you can run:

### `yarn install`

It will install all the dependencies.

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## The project

In order to display the data nicely, I fetched all placements as requested and grouped them by platform first. I did a subgroup of games and finally splitted the games by countries.

For the sake of this test, I didn't gitignored the .env so it would be easier for you to run the project on local, but if you want to spare yourself the hussle you can take a look at it : https://voodoo.estellegresillon.fr/

The fact that we have to do the aggregations ourselves is a bit confusing and does a lot of calculation on the front side. In a real-world situation I would have asked the backend to send a different data to maximize the front performances and code readability. The API is currently not doing any aggregations at all, but simply hiding/displaying different dimensions from the API. Since we need to map over all the items to have the final placements sum, it's harder to display it as KPI above the dashboard because it would cause even more calculation (that was my first intention but I didn't do it).

Nevertheless, as requested, we can see the total revenue for iOS and Android in the "Total" column on the last row "All Games". I highlighted which country has the best revenue for each game with a blue box design, and displayed the total of revenue per country on the "All Games" row. I also highlighted the best selling country for all games.
