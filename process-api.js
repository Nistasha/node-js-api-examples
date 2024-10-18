// process-api-data.js
const axios = require('axios');

const fetchAndAggregate = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;

        const averageTitleLength = posts.reduce((acc, post) => acc + post.title.length, 0) / posts.length;

        console.log('Average title length:', averageTitleLength);
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
};

fetchAndAggregate();
