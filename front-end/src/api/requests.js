const axios = require('axios');

const URL = 'http://localhost:3001';

function getToken() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    axios.defaults.headers.common.Authorization = user.token;
  }
}

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
  getToken();
  return axios.get(`${URL}/products`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getCustomerOrders(userId) {
  getToken();
  return axios.get(`${URL}/customer/orders`, { params: { userId } })
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getCustomerOrdersById(id) {
  getToken();
  return axios.get(`${URL}/customer/orders/${id}`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getSellerOrders(sellerId) {
  getToken();
  return axios.get(`${URL}/seller/orders`, { params: { sellerId } })
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getSellerOrderById(id) {
  getToken();
  return axios.get(`${URL}/seller/orders/${id}`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function updateSellerOrder(id) {
  getToken();
  return axios.put(`${URL}/seller/orders/${id}`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getUsers() {
  getToken();
  return axios.get(`${URL}/admin/manage`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function createUser(body) {
  getToken();
  return axios.post(`${URL}/admin/manage`, body)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function deleteUser(body) {
  getToken();
  return axios.delete(`${URL}/admin/manage`, { data: body })
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function getSellers() {
  getToken();
  return axios.get(`${URL}/seller`)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}

export async function createSale(body) {
  getToken();
  return axios.post(`${URL}/seller/orders`, body)
    .then(({ data }) => data)
    .catch((err) => ({ error: err.response.data.message }));
}
