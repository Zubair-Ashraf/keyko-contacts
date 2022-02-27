import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  const { id } = useParams<{ id: string | undefined }>();

  const {
    contacts,
    contact,
    isLoading,
    onFetchContact,
    onCreateContact,
    onUpdateContact,
    onDeleteContact,
  } = useData();

  const { values, reset, handleValueChange } =
    useForm<Contact>(INITIAL_CONTACT);

  useEffect(() => {
    onFetchContact(parseInt(id));
  }, [id]);

  useEffect(() => contact && reset(contact), [contact]);

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
          reset={reset}
          onValueChange={handleValueChange}
          onCreate={() => onCreateContact(values)}
          onUpdate={(id) => onUpdateContact(id, values)}
          onDelete={(id) => onDeleteContact(id)}
        />
      </Box>
    </Container>
  );
};

export default ManageContacts;
