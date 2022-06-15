- copy .env.example to .env and replace with actual values
- make sure database is created and url is correct
- run `yarn` to install dependencies
- run `yarn start` to start server

# Steps to create a new table

- Make sure sequelize-cli is installed globally. If not, run `npm install -g sequelize-cli`
- Create the appropriate model file, migration file, seed file
  This should create the table as well as populate seed content

# Steps to generate migration file, seed and model

- `sequelize model:generate --name User --attributes username:string,email:string` -> This will generate both the model and migration files
- `sequelize seed:generate --name User`

# Running migration

- `sequelize db:migrate`

# Running seeds

- `sequelize db:seed:all`

Replace model name and attributes accordingly
