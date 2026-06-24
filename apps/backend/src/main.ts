/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import AppRouter from './route';
const cors = require('cors');
const bodyParser = require('body-parser')
const morgan = require('morgan')

const ALLOW_ORIGIN_DOMAIN = [
  'http://localhost:3000',
  'https://outline-provided-sequence.ngrok-free.dev',
  'https://outline-provided-sequence.ngrok-free.dev'
]

const app = express();
app.use(morgan('dev'))
app.use(cors({
  origin: function (origin: any, callback: any) {
    if (!origin || ALLOW_ORIGIN_DOMAIN.includes(origin)) return callback(null, true)
  },
  credentials: true
}));
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
