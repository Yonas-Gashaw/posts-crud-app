import { AppBar, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'red',
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">POSTS</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
