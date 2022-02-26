import { FC } from 'react';
import { Container, Box, Drawer } from 'core-ui';
import { ContactList } from './components/ContactsList';
import { ContactForm } from './components/ContactForm';
import { Contact } from 'interfaces/models';
import { useData, useForm } from './hooks';
import { ManageContactsProps } from './props';
import { INITIAL_CONTACT } from './constants';

export const ManageContacts: FC<ManageContactsProps> = (
  props: ManageContactsProps
) => {
  const { contacts, isLoading, onCreateContact } = useData();

  const { values, reset, handleValueChange } =
    useForm<Contact>(INITIAL_CONTACT);

  const handleReset = () => reset(INITIAL_CONTACT);

  return (
    <Container>
      <Box component='nav'>
        <Drawer open={true} color='dark'>
          <ContactList
            contacts={contacts || []}
            isLoading={isLoading}
            onReset={handleReset}
          />
        </Drawer>
      </Box>
      <Box component='main'>
        <ContactForm
          initialValues={values}
          onValueChange={handleValueChange}
          onCreate={() => onCreateContact(values)}
        />
      </Box>
    </Container>
  );
};

export default ManageContacts;
