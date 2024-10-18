// rate-limiting.js
const axios = require('axios');

const fetchWithRateLimiting = async () => {
    try {
        for (let i = 0; i < 5; i++) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(`Fetched post ${i + 1}:`, response.data[0].title);

            // Simulate rate limit; sleep for 1 second after each request
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

fetchWithRateLimiting();
