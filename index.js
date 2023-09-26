const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const connectDB = require('./database/db');
const routes = require('./routes/authRoutes');

const PORT = 8000;
const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Express Server listening on port: ${PORT}`);
});