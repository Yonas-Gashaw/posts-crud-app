import baseAPI from '../api';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Post } from '../types/Post';
import { usePosts } from '../store/post-store';

const savePost = (post: Post) => {
  return baseAPI.post(`posts`, post);
};

const updatePost = (post: Post) => {
  return baseAPI.put(`posts/${post.id}`, post);
};

const deletePost = (id: string) => {
  return baseAPI.delete(`posts/${id}`);
};

export const getPost = async (id: string | undefined) => {
  const { data } = await baseAPI.get(`posts/${id}`);
  console.log(data);
  return data;
};

export const useSavePostMutation = () => {
  return useMutation(savePost);
};

export const useUpdatePostMutation = () => {
  return useMutation(updatePost);
};

export const useDeletePostMutation = () => {
  return useMutation(deletePost);
};

export const useFetchPostsQuery = () => {
  const { data } = useQuery(['fetch-posts'], () => {
    return baseAPI.get('posts');
  });

  const dispatch = usePosts((state) => state.getPosts);
  dispatch(data?.data);
};

export const useFetchPostQuery = (id: string | undefined) => {
  return useQuery(['fetch-post', id], () => getPost(id));
};
