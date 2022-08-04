import {
  Box,
  Button,
  ButtonGroup,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import {
  useSavePostMutation,
  useUpdatePostMutation,
  useFetchPostQuery,
} from '../hooks/use-post';
import { Post } from '../types/Post';

const PostForm = (props: { isEdit: boolean }) => {
  const [postItem, setPostItem] = useState<Post>({
    id: 0,
    userId: 0,
    title: '',
    body: '',
  });

  const { postId } = useParams();
  const { isEdit } = props;

  const { data } = useFetchPostQuery(postId);

  const { mutate } = useSavePostMutation();
  const { mutate: update } = useUpdatePostMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>();

  useEffect(() => {
    setPostItem(data);
  }, [data]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setPostItem({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Create Post</h2>

      <Box
        width={400}
        height={260}
        bgcolor={'background.default'}
        color={'text.primary'}
        p={3}
        borderRadius={2}
      >
        <Typography variant="h6" color="#746d6dd6" textAlign="center">
          Create Post
        </Typography>

        <form
          onSubmit={handleSubmit((postData: Post) => {
            if (isEdit) {
              update(postData);
            } else {
              // mutate(data);
              mutate({ body: 'gggg', title: 'kkkk', userId: 1 });
            }
          })}
        >
          <FormGroup
            sx={{
              padding: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'primary.main',
              gap: '12px',
            }}
          >
            <TextField
              id="title"
              {...register('title', {
                required: 'Title is required',
                minLength: {
                  value: 5,
                  message: 'Length should be min of 5 characters',
                },
                maxLength: {
                  value: 45,
                  message: 'Length should be max of 45 characters',
                },
              })}
              label="Title"
              size="small"
              style={{ width: '100%' }}
              value={postItem?.title}
              onChange={handleInputChange}
            />
            {errors.title && <p>{errors.title.message}</p>}
            <TextField
              id="id"
              {...register('id')}
              label="ID"
              size="small"
              value={postItem?.id}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
            <TextField
              id="userId"
              {...register('userId')}
              label="User ID"
              size="small"
              value={postItem?.userId}
              onChange={handleInputChange}
              style={{ width: '100%' }}
            />
            <TextField
              sx={{ width: '100%' }}
              id="body"
              {...register('body')}
              value={postItem?.body}
              onChange={handleInputChange}
              multiline
              rows={5}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              style={{
                width: '100%',
                justifyContent: 'space-between',
                borderRadius: '6px',
              }}
            ></ButtonGroup>
            <Button type="submit">Save Post</Button>
          </FormGroup>
        </form>
      </Box>
    </div>
  );
};

export default PostForm;
