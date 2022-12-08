const BASE_URL = "https://jsonplaceholder.typicode.com";

const endpoints = {
  getPost: (id) => `${BASE_URL}/posts/${id}`,
  getPosts: `${BASE_URL}/posts`,
  getComments: (id) => `${BASE_URL}/posts/${id}/comments`,
};

export default endpoints;
