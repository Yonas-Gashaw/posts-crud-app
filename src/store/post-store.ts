import create from 'zustand';
import { Post } from '../types/Post';

interface IPost {
  posts: Post[];
  getPosts: (post: Post[]) => void;
  createPost: (post: Post) => void;
}

export const usePosts = create<IPost>((set) => ({
  posts: [],

  getPosts: (postItem: Post[]) => {
    set((state) => ({ ...state, posts: postItem }));
  },

  createPost: () => {
    set((state) => ({ ...state }));
  },
}));
