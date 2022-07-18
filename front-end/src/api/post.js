const axios = require('axios');

const URL = 'http://localhost:3001';

export default async function post(endpoint, body) {
  return axios.post(`${URL}/${endpoint}`, body)
    .then(({ data }) => data)
    .catch((err) => err.response.data);
}
