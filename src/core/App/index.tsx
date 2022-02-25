import { TextField } from 'core-ui';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      {/**TextField colors */}
      <TextField color='primary' />
      <TextField color='secondary' />
      <TextField color='info' />
      <TextField color='success' />
      <TextField color='primary' />
      <TextField color='warning' />
      <TextField color='danger' />
      {/**TextField sizes */}
      <TextField size='small' />
      <TextField size='medium' />
      <TextField size='large' />
      {/**Rounded TextField */}
      <TextField rounded />
      {/**TextField types */}
      <TextField type='text' />
      <TextField type='password' />
      <TextField type='email' />
      <TextField type='number' />
      <TextField type='tel' />
    </Fragment>
  );
};

export default App;
