import { Contact } from 'interfaces/models';

export interface ContactFormProps {
  initialValues: Contact;

  reset?: (v: Contact) => any;

  onValueChange: (e: any) => any;

  onCreate?: () => any;

  onUpdate?: (id: number) => any;

  onDelete?: (id: number) => any;
}
