// API using fetch to communicate with remote servers
class Api {
  constructor(baseURL, baseHeaders) {
    this.url = baseURL;
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...baseHeaders,
    };
    this.response = undefined;
  }

  get url() {
    return this.name;
  }

  get headers() {
    return this.headers;
  }

  get response() {
    return this.response;
  }

  authorization(tokens) {
    if (tokens) {
      this.headers = {
        ...this.headers,
        Authorization: `Bearer ${tokens}`,
      };
    }
  }

  body(obj) {
    return JSON.stringify(obj);
  }

  get(url, headers) {
    const fetchUrl = `${this.url}${url}`;

    if (headers) {
      this.headers = { ...this.headers, ...headers };
    }
    // eslint-disable-next-line
    return fetch(fetchUrl, {
      method: 'GET',
      headers: this.headers(),
    });
  }

  post(url, data, headers) {
    const fetchUrl = `${this.url}${url}`;

    if (headers) {
      this.headers = { ...this.headers, ...headers };
    }
    // eslint-disable-next-line
    return fetch(fetchUrl, {
      method: 'POST',
      headers: this.headers(),
      body: this.body(data),
    });
  }
  // TO DO other methods
}

export default Api;
