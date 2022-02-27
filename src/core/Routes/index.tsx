import { Routes as Switch, Route } from 'react-router-dom';
import { ManageContacts } from 'routes/ManageContacts';
import { ContactsTable } from 'routes/ManageContacts';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<ManageContacts />} />
      <Route path='/contacts'>
        <Route path='' element={<ManageContacts />} />
        <Route path=':id' element={<ManageContacts />} />
        <Route path='view2' element={<ContactsTable />} />
      </Route>
    </Switch>
  );
};

export default Routes;
