import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import internshipRoutes from './routes/internshipRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import Internship from './models/Internship.js';
import internshipsData from './data/internships.js';

dotenv.config();

const seedDB = async () => {
  try {
    const count = await Internship.countDocuments();
    if (count === 0) {
      await Internship.insertMany(internshipsData);
      console.log('Database seeded successfully with initial internships.');
    }
  } catch (error) {
    console.error(`Error seeding DB: ${error.message}`);
  }
};

const startServer = async () => {
  await connectDB();
  await seedDB();

  const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api/internships', internshipRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

  app.use(notFound);
  app.use(errorHandler);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
};

startServer();
