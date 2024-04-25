const express = require('express');
const cors = require('cors');
const axios = require('axios'); // You'll need axios to make HTTP requests
const app = express();
const port = 3001;

app.use(cors());

// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'YOUR_API_KEY';

app.get('/get-cases-data', async (req, res) => {
 try {
    // Replace 'API_URL' with the actual API endpoint URL
    const API_URL = `https://api.example.com/cases?api_key=${API_KEY}`;
    const response = await axios.get(API_URL);
    res.json(response.data);
 } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Failed to fetch cases data.');
 }
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
