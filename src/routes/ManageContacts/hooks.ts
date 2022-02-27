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

  let { onRequestService: onUpdate } = useService(service.contact.update);

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

  const onUpdateContact = (id: number, data: any) => {
    onUpdate({ id, ...data }).then(() => refetch());
  };

  return {
    contacts,
    contact,
    isLoading,
    error,
    onFetchContact,
    onCreateContact,
    onUpdateContact,
  };
};

export * from 'hooks';
