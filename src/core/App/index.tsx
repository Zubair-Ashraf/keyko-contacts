import { Drawer, Box, Container } from 'core-ui';

const App = () => {
  return (
    <Container>
      <Box component='nav'>
        <Drawer open={true} color='dark'>
          Menu list
        </Drawer>
      </Box>
      <Box component='main'>Main content</Box>
    </Container>
  );
};

export default App;
