import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
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
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post?.title.substring(0, 50)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body?.length > 200
              ? post.body.substring(0, 200) + '...'
              : post.body}
          </Typography>
        </CardContent>

        <CardActions sx={{ position: 'absolute', bottom: 10 }}>
          <Button href={`/posts/${post.id}`} size="small">
            View
          </Button>

          <Button size="small" onClick={() => deleteHandler(post.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostCard;
