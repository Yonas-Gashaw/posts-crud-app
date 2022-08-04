import { Add } from '@mui/icons-material';
import { Box, Fab, Grid, Tooltip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetchPostsQuery } from '../hooks/use-post';
import { usePosts } from '../store/post-store';
import { Post } from '../types/Post';
import PostCard from './PostCard';

const Posts = () => {
  useFetchPostsQuery();

  const postItems = usePosts((state) => state.posts);

  return (
    <Box margin={'auto'}>
      <Typography variant="h4">Posts</Typography>
      <Link to="/create">
        <Tooltip
          title="Add Post"
          sx={{
            position: 'fixed',
            top: 80,
            backgroundColor: '#60478a',
            right: { xs: 'calc(50% - 25px)', md: 30 },
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
      </Link>

      {/* <CircularProgress /> */}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {postItems?.map((d: Post) => (
          <Grid item xs={2} sm={4} md={4} key={d.id}>
            <PostCard key={d.id} post={d} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Posts;
