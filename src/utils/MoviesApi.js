class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) { return res.ok ? res.json() : Promise.reject(res.status) };

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  };

}

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;

