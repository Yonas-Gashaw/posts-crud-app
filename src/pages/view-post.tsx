import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPostQuery } from '../hooks/use-post';

const Post = () => {
  //   const { postId } = useParams();

  const { data: detail } = useFetchPostQuery('1');

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h2>Post Detail</h2>
      {/* {detail && <p>{detail?.data?}</p>} */}
    </div>
  );
};

export default Post;
