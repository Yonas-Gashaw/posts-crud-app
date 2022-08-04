import { createSlice } from '@reduxjs/toolkit';
import { Post } from '../types/Post';

export interface PostSlice {
  value: Post[];
  isLoading: boolean;
}

const initialState: PostSlice = {
  value: [],
  isLoading: false,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPost: (state, action) => {
      state.value.push(action.payload);

      console.log(action.payload);
    },

    addPost: (state, action) => {
      state.value.push(action.payload);
    },

    editPost: (state, action) => {
      let tempList = state.value.find(
        (item: Post) => item.id === action.payload.id
      );
      if (tempList) {
        tempList = action.payload;
      }
    },
  },
});

export const { addPost, fetchPost } = postSlice.actions;

export default postSlice.reducer;
