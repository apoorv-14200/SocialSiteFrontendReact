const ROOT_URL = 'http://localhost:4000/api';

const URLS = {
  fetchposts: (page = 1, limit = 5) =>
    ROOT_URL + `/posts?page=${page}&limit=${limit}`,
  login: () => ROOT_URL + '/users/login',
  signup: () => ROOT_URL + '/users/signup',
  editProfile: () => ROOT_URL + '/users/edit',
  fetchProfile: (id) => ROOT_URL + `/users/${id}`,
  fetchFriends: () => ROOT_URL + '/friendship/fetch_user_friends',
  AddFriend: (id) => ROOT_URL + `/friendship/create_friendship?user_id=${id}`,
  RemoveFriend: (id) =>
    ROOT_URL + `/friendship/remove_friendship?user_id=${id}`,
  createPost: () => ROOT_URL + '/posts/create',
  createComment: () => ROOT_URL + '/comments',
  toggleLike: (id, type) => ROOT_URL + `/likes/toggle?id=${id}&type=${type}`,
  SearchUsers: (text) => ROOT_URL + `/users/search?text=${text}`,
};
export default URLS;
