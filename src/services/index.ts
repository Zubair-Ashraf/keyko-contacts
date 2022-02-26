import { ContactService } from './contact.service';

const Service = {
  contact: {
    list: ContactService.getContacts,
    getOne: ContactService.getContact,
    create: ContactService.createContact,
    update: ContactService.updateContact,
    delete: ContactService.deleteContact,
  },
};

export default Service;
