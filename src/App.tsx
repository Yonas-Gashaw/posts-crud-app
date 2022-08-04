import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/system';
import PostForm from './components/PostForm';
import ViewPost from './pages/view-post';
import PostList from './pages/post-list';

const Test = () => {
  return (
    <Router>
      <Box>
        <Navbar />
        <Container maxWidth="md">
          <Routes>
            <Route path="posts" element={<PostList />} />
            <Route path="posts/:id" element={<ViewPost />} />
            <Route path="create" element={<PostForm isEdit={false} />} />
            <Route path="edit/:postId" element={<PostForm isEdit={true} />} />
          </Routes>
        </Container>

        {/* <Footer /> */}
      </Box>
    </Router>
  );
};

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Test />
    </QueryClientProvider>
  );
};

export default App;
