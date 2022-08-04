import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostDetail from './components/PostDetail';
import CreatePost from './components/PostForm';
// import Posts from './components/Posts';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/system';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Posts from './pages/post-list';

const Test = () => {
  return (
    <Provider store={store}>
      <Router>
        <Box>
          <Navbar />
          <Container maxWidth="md">
            <Routes>
              <Route path="posts" element={<Posts />} />
              <Route path="posts/:id" element={<PostDetail />} />
              <Route path="create" element={<PostForm isEdit={false} />} />
              <Route path="edit/:postId" element={<PostForm isEdit={true} />} />
            </Routes>
          </Container>

          <Footer />
        </Box>
      </Router>
    </Provider>
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
