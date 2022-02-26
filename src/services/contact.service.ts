import IndexedDb from 'helpers/indexedDB';

class Contact {
  private indexedDb: IndexedDb;

  constructor() {
    this.init();
  }

  private init = async () => {
    this.indexedDb = new IndexedDb('keyko');
    await this.indexedDb.createObjectStore(['contacts']);
  };

  public getContacts = async () => {
    const result = await this.indexedDb.getAllValue('contacts');
    return result;
  };

  public getContact = async (id: number) => {
    const result = await this.indexedDb.getValue('contacts', id);
    return result;
  };

  public createContact = async (value: object) => {
    const result = await this.indexedDb.putValue('contacts', value);
    return result;
  };

  public updateContact = async (value: object, id: number) => {
    const result = await this.indexedDb.putValue('contacts', value);
    return result;
  };

  public deleteContact = async (id: number) => {
    const result = await this.indexedDb.deleteValue('contacts', id);
    return result;
  };
}

const ContactService = new Contact();

export { ContactService };
