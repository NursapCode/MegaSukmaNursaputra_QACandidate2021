const axios = require('axios');

async function dataAPI() {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    return response;
}

module.exports = dataAPI;