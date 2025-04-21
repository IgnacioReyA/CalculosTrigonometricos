import express from 'express';
import calculosRoute from './src/routes/calculosRoute'

const app = express();
app.use(express.json());
app.use('/api/calculos', calculosRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))