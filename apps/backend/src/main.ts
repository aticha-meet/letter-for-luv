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
  'https://fronent-card-letter.netlify.app'
]

const app = express();
app.use(morgan('dev'))

app.use(cors({
  origin: function (origin: any, callback: any) {
    // ถ้ายิงมาจากเครื่องตัวเอง (ไม่มี origin) หรืออยู่ในลิสต์โดเมน ยอมให้ผ่าน
    if (!origin || ALLOW_ORIGIN_DOMAIN.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // ถ้ายิงมาจากโดเมนอื่นที่แปลกปลอม ส่ง Error ปฏิเสธกลับไป
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'ngrok-skip-browser-warning'] // 🎯 เปิดทางให้ header ของ ngrok ด้วย
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
