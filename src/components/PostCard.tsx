import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useDeletePostMutation } from '../hooks/use-post';

const PostCard = ({ post }: any) => {
  const { mutate } = useDeletePostMutation();

  const deleteHandler = (id: string) => {
    mutate(id);
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 345,
          minHeight: 300,
          maxHeight: 300,
          flexWrap: 'wrap',
          msOverflowY: 'scroll',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={`/edit/${post.id}`}>Edit</NavLink>

          <Button size="small" onClick={() => deleteHandler(post.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
