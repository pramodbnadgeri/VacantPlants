- copy .env.example to .env and replace with actual values
- make sure database is created and url is correct
- run `yarn` to install dependencies
- run `yarn start` to start server

# Steps to create a new table

- Make sure sequelize-cli is installed globally. If not, run `npm install -g sequelize-cli`
- Create the appropriate model file, migration file, seed file
- Run migration by `sequelize db:migrate`
- Run seed by `sequelize db:seed:all`

This should create the table as well as populate seed content

# Shortcuts to generate migration file and model

- sequelize model:generate --name User --attributes username:string,email:string
- sequelize seed:generate --name User

Replace model name and attributes accordingly
