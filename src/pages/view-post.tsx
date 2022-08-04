import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import { useFetchPostQuery } from '../hooks/use-post';
import { Post } from '../types/Post';

const ViewPost = () => {
  const { id } = useParams();

  const { data } = useFetchPostQuery(id);

  return (
    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
      <Typography variant="h4">Post Detail</Typography>
      <PostDetail detail={data as Post} />
    </Box>
  );
};

export default ViewPost;
