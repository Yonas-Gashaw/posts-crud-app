import { AppBar, styled, Toolbar, Typography } from '@mui/material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#60478a',
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6">CRUD Post</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
