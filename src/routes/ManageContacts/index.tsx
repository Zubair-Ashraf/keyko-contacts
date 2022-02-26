import { FC } from 'react';
import { Container, Box, Drawer } from 'core-ui';
import { ContactList } from './components/ContactsList';
import { ManageContactsProps } from './props';

export const ManageContacts: FC<ManageContactsProps> = (
  props: ManageContactsProps
) => {
  return (
    <Container>
      <Box component='nav'>
        <Drawer open={true} color='dark'>
          <ContactList contacts={[]} isLoading={false} />
        </Drawer>
      </Box>
      <Box component='main'>Main content</Box>
    </Container>
  );
};

export default ManageContacts;
