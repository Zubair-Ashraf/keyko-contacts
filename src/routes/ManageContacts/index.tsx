import { Container, Box, Drawer } from 'core-ui';

export const ManageContacts = () => {
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

export default ManageContacts;
