import { Fragment } from 'react';
import { Chip, Icon } from 'core-ui';

const App = () => {
  return (
    <Fragment>
      {/**Chip colors */}
      <Chip color='danger' rounded>
        Danger
      </Chip>
      <Chip color='primary' rounded>
        Primary
      </Chip>
      <Chip color='warning' rounded>
        Warning
      </Chip>
      <Chip color='light' rounded>
        Light
      </Chip>
      <Chip color='info' rounded>
        Info
      </Chip>
      <Chip color='success' rounded>
        Ssccess
      </Chip>
      <Chip color='secondary' rounded>
        Secondary
      </Chip>
      {/**Chip sizes */}
      <Chip color='primary' size='small' rounded>
        Secondary
      </Chip>
      <Chip color='primary' size='medium' rounded>
        Secondary
      </Chip>
      <Chip color='primary' size='large' rounded>
        Secondary
      </Chip>
    </Fragment>
  );
};

export default App;
