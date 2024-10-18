// paginated-get.js
const axios = require('axios');

const fetchAllPages = async (url) => {
    let page = 1;
    let allData = [];

    while (true) {
        const response = await axios.get(`${url}?page=${page}`);
        const data = response.data;

        if (data.length === 0) break; // Stop if no more data

        allData = allData.concat(data);
        page++;
    }

    console.log(`Fetched ${allData.length} items.`);
};

// Call the function with the appropriate API URL
fetchAllPages('https://jsonplaceholder.typicode.com/posts');
