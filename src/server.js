const express = require('express');
const app = express();
const recyclingRoutes = require('./routes/ewasteRoutes');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');

const port = process.env.PORT || 3000;

const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/', recyclingRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});