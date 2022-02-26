import { Contact } from 'interfaces/models';

export interface ContactsListProps {
  contacts: Contact[];

  isLoading?: boolean;

  error?: Error | string | null;
}
