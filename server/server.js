// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const employeeLeaveRoutes = require('./routes/employeeLeaveRoutes');
const hrLeaveRoutes = require('./routes/hrLeaveRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/hr', require('./routes/hrRoutes'));

app.use('/api/leave', employeeLeaveRoutes);
app.use('/api/hrs', hrLeaveRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
}).catch(err => console.log(err));
