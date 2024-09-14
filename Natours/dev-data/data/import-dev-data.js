/* eslint-disable node/no-unsupported-features/es-syntax */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('../../models/TourModel');

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

//   Read json File

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

// Import Data Into DB

const importDate = async () => {
  try {
    await Tour.create(tours);
    console.log('Data is Successfullt Loaded');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delet All Data From Collections

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data is SuccessFully Deleted');
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

console.log(process.argv);

if (process.argv[2] === '--import') {
  importDate();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
