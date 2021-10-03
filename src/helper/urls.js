const ROOT_URL = 'http://localhost:4000/api';

const URLS = {
  fetchposts: (page = 1, limit = 5) =>
    ROOT_URL + `/posts?page=${page}&limit=${limit}`,
  login: () => ROOT_URL + '/users/login',
  signup: () => ROOT_URL + '/users/signup',
};
export default URLS;
