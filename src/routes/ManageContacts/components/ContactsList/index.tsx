import { FC, Fragment } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Divider, List, Typography, Icon, Button, Box } from 'core-ui';
import { ContactsListProps } from './props';

export const ContactList: FC<ContactsListProps> = (
  props: ContactsListProps
) => {
  const { contacts, isLoading, onReset } = props;

  const { id: contactId } = useParams<{ id: string | undefined }>();

  const navigate = useNavigate();

  const handleNavigate = () => {
    onReset();

    navigate('/contacts');
  };

  if (isLoading)
    return (
      <Typography size='6' color='white' textAlign='left'>
        Loading contacts...
      </Typography>
    );

  return (
    <Fragment>
      <Box>
        <Typography size='5' color='white' textAlign='center'>
          Contacts ({contacts.length})
        </Typography>
        <Button size='small' onClick={handleNavigate}>
          <Icon name='plus-square' color='dark' />
        </Button>
      </Box>
      <Divider color='light' />
      {contacts.length === 0 ? (
        <Typography size='6' color='white' textAlign='center'>
          No contact found
        </Typography>
      ) : (
        <List hoverable>
          {contacts.map(
            ({ id, name, lastName, designation, avatar }, index) => (
              <Link to={`/contacts/${id}`} key={`contact-${index}`}>
                <List.Item active={id === parseInt(contactId)}>
                  <List.ItemAvatar url={avatar} />
                  <List.ItemText
                    primary={name + ' ' + lastName}
                    secondary={designation}
                  />
                </List.Item>
                <Divider color='light' />
              </Link>
            )
          )}
        </List>
      )}
    </Fragment>
  );
};

export default ContactList;
