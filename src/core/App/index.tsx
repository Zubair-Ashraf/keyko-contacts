import { Fragment } from 'react';
import { Divider } from 'core-ui';

const App = () => {
  return (
    <Fragment>
      <Divider color='black' />
      <br />
      <Divider color='danger' />
      <br />
      <Divider color='warning' />
      <br />
      <Divider color='dark' />
      <br />
      <Divider color='info' />
      <br />
      <Divider color='primary' />
      <br />
      <Divider color='success' />
      <br />
      <Divider color='secondary' />
      <br />
    </Fragment>
  );
};

export default App;
