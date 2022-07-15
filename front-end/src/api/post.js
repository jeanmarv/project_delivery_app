const URL = 'http://localhost:3001';

export default async function post(endpoint, data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(data),
  };

  return fetch(`${URL}/${endpoint}`, requestOptions)
    .then((res) => res.json()
      .then((json) => (res.ok ? Promise.resolve(json) : Promise.reject(json))));
}
