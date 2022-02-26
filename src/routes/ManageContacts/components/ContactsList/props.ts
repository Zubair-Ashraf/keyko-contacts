import { Contact } from 'interfaces/models';

export interface ContactsListProps {
  contacts: Contact[];

  onReset?: () => any;

  isLoading?: boolean;

  error?: Error | string | null;
}
