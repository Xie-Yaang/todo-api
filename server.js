
const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/tasks');
const { errorHandler } = require('./middleware/errorHandler');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('API запущен: http://localhost:${PORT}');
});