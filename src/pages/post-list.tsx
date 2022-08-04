import { useSelector } from 'react-redux';
import PostList from '../components/Posts';
import { useFetchPostsQuery } from '../hooks/use-post';
import { PostSlice } from '../store/postSlice';
import { Post } from '../types/Post';

const Posts = () => {
  useFetchPostsQuery();
  const currentPosts: Post[] = useSelector((state: PostSlice) => state.value);

  return (
    <div>
      <PostList />
    </div>
  );
};

export default Posts;
