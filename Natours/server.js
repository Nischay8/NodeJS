const dotenv = require('dotenv');

const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

const db = process.env.DATABASE_LOCAL;

mongoose
  .connect(db)
  .then(() => {
    console.log('Db is Connected');
  })
  .catch(err => {
    console.log('Erro while Making Connection to Database', err);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
