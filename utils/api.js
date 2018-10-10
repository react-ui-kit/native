// API using fetch to communicate with remote servers
class API {
  constructor(url, headers) {
    this.url = url;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    };
    this.response = undefined;
  }

  authorization(tokens) {
    if (tokens) {
      this.headers = {
        ...this.headers,
        Authorization: `Bearer ${tokens}`,
      };
    }
  }

  get(url, headers) {
    const fetchUrl = `${this.url}${url}`;

    if (headers) {
      this.headers = { ...this.headers, ...headers };
    }
    // eslint-disable-next-line
    return fetch(fetchUrl, {
      method: 'GET',
      headers: this.headers,
    }).then(response => response.json());
  }

  post(url, data, headers) {
    const fetchUrl = `${this.url}${url}`;

    if (headers) {
      this.headers = { ...this.headers, ...headers };
    }
    // eslint-disable-next-line
    return fetch(fetchUrl, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
    }).then(response => response.json());
  }
}

export default API;

/** 
// usage example using remote service https://reqres.in/

const apiUrl = `https://reqres.in/api`;
const apiInstance = new API(apiUrl);

const login = payload => apiInstance.post(`/login`, payload);

const credentials = {
  email: 'peter@klaven',
  password: 'cityslicka',
};

login(credentials)
  .then(response => {
    apiInstance.authorization(response.token); // setting the header Authorization
    return response.token;
  })
  .catch(err => {
    const code = err.response ? err.response.status : 500;
    const message = err.response ? err.response.error : err;
    return {
      code,
      message,
    };
  });
*/
