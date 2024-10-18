// simple-get.js
const axios = require('axios');

const fetchGitHubUser = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
};

// Call the function with a username
fetchGitHubUser('octocat');
