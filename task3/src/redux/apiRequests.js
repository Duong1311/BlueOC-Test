//get api redux save to store API Endpoint: https://jsonplaceholder.typicode.com/posts
import axios from "axios";
import {
  addPost,
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./actions";

export const fetchPosts = async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15"
    );

    dispatch(fetchPostsSuccess(res.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};
export const addNewPost = async (dispatch, post) => {
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );

    dispatch(addPost(res.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};
