import { Add } from '@mui/icons-material';
import { Box, Fab, Grid, Tooltip, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useFetchPostsQuery } from '../hooks/use-post';
import { PostSlice } from '../store/postSlice';
import { Post } from '../types/Post';
import PostCard from './PostCard';

const PostList = () => {
  useFetchPostsQuery();
  const yyy: PostSlice = useSelector((state: any) => {
    return state['postReducer'];
  });

  console.log(`YYYY`, yyy);

  return (
    <Box margin={'auto'}>
      <Typography variant="h4">Posts</Typography>
      <Tooltip
        title="Add Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          backgroundColor: '#60478a',
          left: { xs: 'calc(50% - 25px)', md: 30 },
          '&:hover': {
            transition: 'all 0.5s ease',
            backgroundColor: '#0c021d',
          },
        }}
      >
        <Fab color="primary" aria-label="addPost">
          <Add sx={{ color: '#fdfdfd' }} />
        </Fab>
      </Tooltip>

      {/* <CircularProgress /> */}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {yyy?.value?.map((d: Post) => (
          <Grid item xs={2} sm={4} md={4} key={d.id}>
            <PostCard key={d.id} post={d} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostList;
