const axios = require('axios');

const URL = 'http://localhost:3001';

export async function login(body) {
  return axios.post(`${URL}/login`, body)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function register(body) {
  return axios.post(`${URL}/register`, body)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getProducts() {
  return axios.get(`${URL}/products`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}
