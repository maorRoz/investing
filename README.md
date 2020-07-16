# Stack (and helpful libraries that worth mentioning)
* Node.js
* React
* Styled-components
* Mateiral-UI
* MongoDB
* mongoose
* Nest.js
* GraphQL/Apollo
* TypeScript


# How to run the app

1. execute `yarn install`
2. execute `yarn build:server`
3. create a local mongodb database server on port `27017`(default) with admin database. make sure that the connection properties are `user: root` and `password: rootpassword`. Alternatively, you may edit the code to make it fit your kind of mongodb server credentials.
4. Now you may either execute `yarn start` or `yarn dev` which will start both the server and the client.

# Assumptions
1. I've assumed that I can rely on the fact that nothing wrong will happens during the communication between the server and the client.
2. I've assumed that the search should occur on the UI only(no filtering has been added to the backend, so the client has to fetch everything first)
3. I've assumed that the search may show any instrument which has a similar name/symbol/instrumentInput field
4. I've assumed that I shouldn't display the instrumentId on the UI



# Final words
I had tons of fun during the implementation process. Hopefully, you'll experience the same while checking it :) Let me know if you have any questions or experience difficulties running it
