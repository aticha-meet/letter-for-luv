/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import AppRouter from './route';
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())
app.use(AppRouter);

// app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.PORT_NUMBER || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
