import {
  ADD_COMMENT_FAILED,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  TOGGLE_LIKE_FAILED,
  TOGGLE_LIKE_SUCCESS,
  UPDATE_POSTS,
} from '../actions/actionTypes';
const initialPostsState = {
  posts: [],
  error: null,
};
export default function posts(state = initialPostsState, action) {
  switch (action.type) {
    case UPDATE_POSTS: {
      return {
        ...state,
        posts: action.posts,
        error: null,
      };
    }
    case ADD_POST_SUCCESS: {
      return {
        posts: [action.post, ...state.posts],
        error: false,
      };
    }
    case ADD_POST_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    case ADD_COMMENT_SUCCESS: {
      let newPosts = state.posts.map((post) => {
        if (post._id == action.post_id) {
          return {
            ...post,
            comment: [action.comment, ...post.comment],
          };
        }
        return post;
      });
      return {
        ...state,
        posts: newPosts,
        error: null,
      };
    }
    case ADD_COMMENT_FAILED: {
      return {
        error: action.error,
      };
    }
    case TOGGLE_LIKE_SUCCESS: {
      if (action.likeabletype == 'Post') {
        let newPosts = state.posts.map((post) => {
          if (post._id == action.id) {
            if (action.deleted) {
              let newLikes = post.likes.filter(
                (like) => like._id != action.like._id
              );
              return {
                ...post,
                likes: newLikes,
              };
            } else {
              let newLikes = post.likes;
              newLikes.push(action.like);
              return {
                ...post,
                likes: newLikes,
              };
            }
          }
          return post;
        });
        return {
          ...state,
          posts: newPosts,
        };
      } else {
        //Logic ffor comments like
      }
    }
    case TOGGLE_LIKE_FAILED: {
    }
    default: {
      return state;
    }
  }
}
