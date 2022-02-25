import { Button } from 'core-ui';
import { Fragment } from 'react';

const App = () => {
  return (
    <Fragment>
      {/**Button colors */}
      <Button color='primary'>Primary Button</Button>
      <Button color='secondary'>Secondary Button</Button>
      <Button color='info'>Info Button</Button>
      <Button color='light'>Light Button</Button>
      <Button color='warning'>Waring Button</Button>
      <Button color='danger'>Danger Button</Button>
      <Button color='dark'>Danger Button</Button>
      {/**Fullwidth Button */}
      <Button color='dark' fullwidth>
        Full Width
      </Button>
      {/**Button Sizes */}
      <Button color='dark' size='small'>
        Small
      </Button>
      <Button color='dark' size='medium'>
        Medium
      </Button>
      <Button color='dark' size='large'>
        Large
      </Button>
      {/**Disabled button */}
      <Button color='dark' disabled>
        Disabled
      </Button>
    </Fragment>
  );
};

export default App;
