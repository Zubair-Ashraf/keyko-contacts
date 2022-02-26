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
  } = useService<Contact[]>(service.contact.list);

  useEffect(() => onFetchContacts(), []);

  const onFetchContacts = () => {
    onLoadContacts();
  };

  return { contacts, isLoading, error };
};

export * from 'hooks';
