import { UPDATE_POSTS } from '../actions/actionTypes';
const initialPostsState = [];
export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case UPDATE_POSTS: {
      return action.posts;
    }
    default: {
      return state;
    }
  }
}
