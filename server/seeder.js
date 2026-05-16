import mongoose from 'mongoose';
import dotenv from 'dotenv';
import internships from './data/internships.js';
import Internship from './models/Internship.js';
import Application from './models/Application.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Internship.deleteMany();
    await Application.deleteMany();

    await Internship.insertMany(internships);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Internship.deleteMany();
    await Application.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
