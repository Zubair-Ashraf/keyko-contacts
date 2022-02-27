import { Table, Typography } from 'core-ui';
import { useData } from '../../hooks';

export const ContactsTable = () => {
  const { contacts, isLoading } = useData();

  if (isLoading)
    return (
      <Typography size='6' textAlign='left'>
        Data is loading...
      </Typography>
    );

  const data = contacts?.map(
    ({ name, lastName, designation, email, telNumber, tags }) => ({
      name,
      lastName,
      designation,
      email,
      telNumber,
      tags,
    })
  );

  const header = [
    'Name',
    'Last Name',
    'Designation',
    'Email',
    'Tel No #',
    'Tags',
  ];

  return <Table header={header} data={data} />;
};
