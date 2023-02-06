const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, () => console.log(`Server starting on port ${PORT}`));