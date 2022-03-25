import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);

app.get('/', (_request, response) =>
  response.json({ message: 'Hello World!' })
);

app.listen(3333);
