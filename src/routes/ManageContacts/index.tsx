import { FC } from 'react';
import { Container, Box, Drawer } from 'core-ui';
import { ContactList } from './components/ContactsList';
import { ContactForm } from './components/ContactForm';
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
      <Box component='main'>
        <ContactForm />
      </Box>
    </Container>
  );
};

export default ManageContacts;
