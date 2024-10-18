// error-handling.js
const axios = require('axios');

const fetchDataWithErrorHandling = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/9999'); // Non-existent post
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error(`Error: ${error.response.status} - ${error.response.data}`);
        } else {
            console.error('Error:', error.message);
        }
    }
};

fetchDataWithErrorHandling();
