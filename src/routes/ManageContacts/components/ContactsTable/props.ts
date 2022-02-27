import { Contact } from 'interfaces/models';

export interface ContactsTableProps {
  contacts: Contact[];

  onReset?: () => any;

  isLoading?: boolean;

  error?: Error | string | null;
}
