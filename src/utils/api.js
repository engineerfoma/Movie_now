const BASE_URL = 'https://floating-sierra-20135.herokuapp/com/api';

const checkResponse = (response) =>
  response.ok ?
    response.json()
    : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`));

    async function fetchMovie(movieId) {
  try {
    const response = await axios.get(
      `https://floating-sierra-20135.herokuapp.com/api/movie/${movieId}`
    );
    this.movie = response.data.data;
  } catch (e) {
    console.log(e);
  }