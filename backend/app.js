const express = require('express');
const app = express();
const patientRouter = require('./routes/patient');

app.use(express.json());
app.use('/patients', patientRouter);

const mongoose = require('mongoose');

// Replace <db_password> with your actual MongoDB Atlas password
mongoose.connect('mongodb+srv://yasvanthikak21it:yasvanthika@cluster0.cemv9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
