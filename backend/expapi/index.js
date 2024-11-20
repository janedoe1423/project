const express = require('express');
const cors = require('cors');
const metricsRouter = require('./api');
require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', metricsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});