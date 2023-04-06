# HOW DID I BUILT THIS

- create client and server folders
- git init and gitignore
- in server - npm init -y and install express
- create app.js and run a server on PORT 5000
- connect POSTGRES db - done, go with client
- install pg
- install dotenv - its just to set environment variables from a file called .env (no need in production)
- point to remember - .env file should be in same folder where we installed dotenv package
- add dev dependency nodemon
- Make db connection handle exception
- Start the server only when db is connected
- checkpoint - push the code since you have connected the DB
- Design and create Blog database
![travel_db_design_V1](https://user-images.githubusercontent.com/34683754/230307291-197b18c4-e714-470a-8aa7-baf2a56a82c0.png)
