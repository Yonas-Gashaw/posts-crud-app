import Posts from '../components/Posts';
import { useFetchPostsQuery } from '../hooks/use-post';

const PostList = () => {
  useFetchPostsQuery();

  return (
    <div>
      <Posts />
    </div>
  );
};

export default PostList;
