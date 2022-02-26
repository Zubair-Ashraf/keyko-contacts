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

  let { onRequestService: onCreate } = useService(service.contact.create);

  useEffect(() => onFetchContacts(), []);

  const onFetchContacts = () => {
    onLoadContacts();
  };

  const onCreateContact = (data: any) => {
    onCreate(data).then(() => refetch());
  };

  return { contacts, isLoading, error, onCreateContact };
};

export * from 'hooks';
