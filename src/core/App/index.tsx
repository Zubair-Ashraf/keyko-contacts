import { Fragment } from 'react';
import { Icon } from 'core-ui';

const App = () => {
  return (
    <Fragment>
      {/**Icons */}
      <Icon name='home' />
      <Icon name='times' />
      <Icon name='circle' />
      {/**Icons color */}
      <Icon name='home' color='primary' />
      <Icon name='home' color='info' />
      <Icon name='times' color='danger' />
      <Icon name='angle-right' color='warning' />
      <Icon name='arrow-left' color='dark' />
      {/**Icons sizes */}
      <Icon name='home' size='small' />
      <Icon name='home' size='medium' />
      <Icon name='home' size='large' />
    </Fragment>
  );
};

export default App;
