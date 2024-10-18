// authenticated-request.js
const axios = require('axios');

const fetchProtectedData = async (apiKey) => {
    try {
        const response = await axios.get('https://api.example.com/protected', {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
            },
        });
        console.log('Protected data:', response.data);
    } catch (error) {
        console.error('Error fetching protected data:', error.message);
    }
};

// Replace with your actual API key
const apiKey = 'your_api_key_here';
fetchProtectedData(apiKey);
