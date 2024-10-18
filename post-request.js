// post-request.js
const axios = require('axios');

const createPost = async (post) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
        console.log('Post created:', response.data);
    } catch (error) {
        console.error('Error creating post:', error.message);
    }
};

// Example post data
const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

createPost(newPost);
