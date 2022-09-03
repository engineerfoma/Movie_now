const BASE_URL = 'https://floating-sierra-20135.herokuapp/com/api';

const checkResponse = (response) =>
  response.ok ?
    response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

const headers = {
  'Content-type': "application/json",
};

// export const register = ({ email, password }) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ email, password })
//   })
//     .then(res => checkResponse(res));
// };

// export const authorize = ({ email, password }) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers,
//     body: JSON.stringify({ email, password })
//   })
//     .then(res => checkResponse(res));
// };

export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
    },
  })
    .then(res => checkResponse(res));
};