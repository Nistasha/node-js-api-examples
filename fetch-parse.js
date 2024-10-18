// fetch-and-parse.js
const axios = require('axios');

const fetchAndParse = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const titles = response.data.map(post => post.title);
        console.log('Post Titles:', titles);
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
};

fetchAndParse();
