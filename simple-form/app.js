const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // <--- ADD THIS
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // <--- AND THIS LINE
app.use(express.json());
app.use('/api/auth', authRoutes);

// Optional: simple route for debugging
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
