import { Button, Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDeletePostMutation } from '../hooks/use-post';
import { Post } from '../types/Post';

interface IProp {
  detail: Post;
}
const PostDetail = (prop: IProp) => {
  const { detail } = prop;

  const navigate = useNavigate();
  const { mutate } = useDeletePostMutation();

  const deleteHandler = (id?: string) => {
    if (id) {
      mutate(id);
    }
    navigate('/posts');
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 700,
          height: 'auto',
          flexWrap: 'wrap',
          msOverflowY: 'scroll',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {detail?.body}
          </Typography>
        </CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '1rem',
          }}
        >
          <Button href={`/posts`} size="small">
            Home
          </Button>

          <div>
            <Button href={`/edit/${detail?.id}`} size="small">
              Edit
            </Button>
            <Button size="small" onClick={() => deleteHandler(detail?.id)}>
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PostDetail;
