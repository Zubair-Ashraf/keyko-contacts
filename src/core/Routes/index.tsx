import { Routes as Switch, Route } from 'react-router-dom';
import ManageContacts from 'routes/ManageContacts';
import ManageHome from 'routes/ManageHome';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' element={<ManageHome />} />
      <Route path='/contacts'>
        <Route path='' element={<ManageContacts />} />
        <Route path=':id' element={<ManageContacts />} />
      </Route>
    </Switch>
  );
};

export default Routes;
