require('dotenv').config();
const express = require('express');
const axios = require('axios');
const https = require('https');
const app = express();

const PORT = process.env.PORT || 3000;
const RENDER_API_KEY = process.env.RENDER_API_KEY;

// Create HTTPS agent that ignores self-signed certificates
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
});

// Endpoint to get list of Render services
app.get('/services', async (req, res) => {
  try {
    // Check if API key is configured
    if (!RENDER_API_KEY) {
      return res.status(500).json({ 
        error: 'RENDER_API_KEY is not configured in environment variables' 
      });
    }

    // Fetch services from Render API
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${RENDER_API_KEY}`
      },
      httpsAgent: httpsAgent
    });

    // Return the JSON response
    res.json(response.data);

  } catch (error) {
    console.error('Error fetching Render services:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Render API Server',
    endpoints: {
      services: '/services - Get list of all Render services'
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/services to see your Render services`);
});
