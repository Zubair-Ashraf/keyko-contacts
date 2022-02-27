import { useEffect } from 'react';
import { useService } from 'hooks';
import { Contact } from 'interfaces/models';
import service from 'services';

export const useData = () => {
  let {
    onRequestService: onLoadContacts,
    data: contacts,
    isLoading,
    error,
    refetch,
  } = useService<Contact[]>(service.contact.list);

  let { onRequestService: onLoadContact, data: contact } = useService<Contact>(
    service.contact.getOne
  );

  let { onRequestService: onCreate } = useService(service.contact.create);

  useEffect(() => onFetchContacts(), []);

  const onFetchContacts = () => {
    onLoadContacts();
  };

  const onFetchContact = (id: number) => {
    onLoadContact(id);
  };

  const onCreateContact = (data: any) => {
    onCreate(data).then(() => refetch());
  };

  return {
    contacts,
    contact,
    isLoading,
    error,
    onFetchContact,
    onCreateContact,
  };
};

export * from 'hooks';
