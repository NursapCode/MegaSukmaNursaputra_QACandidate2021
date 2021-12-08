const axios = require('axios');

async function dataAPI() {
    const input = {
        "name": "morpheus",
        "job": "leader"
    };
    const response = await axios.post('https://reqres.in/api/users', input);
    console.log(response);
    return response;
}

module.exports = dataAPI;