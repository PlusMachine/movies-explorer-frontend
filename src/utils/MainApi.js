class MainApi {
  constructor(options) {
    this._url = options.baseUrl;
  }

  _checkResponse(res) { return res.ok ? res.json() : Promise.reject(res.status) };

  registration = ({ username, password, email }) => {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, name: username })
    })
      .then(res => this._checkResponse(res))
  };

  authorization = ({ password, email }) => {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email, })
    })
      .then(res => this._checkResponse(res))
  }

  editUserProfile = ({ name, email }, token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
      }),
    }).then((res) => this._checkResponse(res));
  }

  getUserData = (token) => {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      }
    }).then(res => res.json())
  }

  getMovies(token) {
    return fetch(`${this._url}/movies`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then(res => res.json())
  }

  addMovie(data, token) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        description: data.description,
        year: data.year,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    }).then(res => res.json())
  }

  deleteMovie(cardId, token) {
    return fetch(`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
  }
}



const mainApi = new MainApi({
  baseUrl: 'https://api.redox.nomoredomainsicu.ru',
});

export default mainApi;

