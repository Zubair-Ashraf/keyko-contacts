import { Routes as Switch, Route } from 'react-router-dom';
import { ManageHome } from 'routes/ManageHome';
import { ManageContacts } from 'routes/ManageContacts';

const Routes = () => (
  <Switch>
    <Route path='/' element={<ManageHome />} />
    <Route path='/contacts'>
      <Route path='' element={<ManageContacts />} />
      <Route path=':id' element={<ManageContacts />} />
    </Route>
  </Switch>
);

export default Routes;
