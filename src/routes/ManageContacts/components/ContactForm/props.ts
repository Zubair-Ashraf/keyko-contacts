import { Contact } from 'interfaces/models';

export interface ContactFormProps {
  initialValues: Contact;

  onValueChange: (e: any) => any;
}
