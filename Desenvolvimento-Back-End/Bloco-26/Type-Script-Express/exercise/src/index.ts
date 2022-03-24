import express from 'express';
import UsersRoutes from './routes/users'

const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript')
});

app.use(UsersRoutes)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});