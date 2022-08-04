import { useFetchPostQuery } from '../hooks/use-post';

const Post = () => {
  const { data: detail } = useFetchPostQuery('1');

  return (
    <div>
      <h2>Post Detail</h2>
      {detail && <p>{detail?.title}</p>}
    </div>
  );
};

export default Post;
