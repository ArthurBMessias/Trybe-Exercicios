// models/connection.ts

import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:3000/model_example') =>
  mongoose.connect(mongoDatabaseURI);

export default connection;