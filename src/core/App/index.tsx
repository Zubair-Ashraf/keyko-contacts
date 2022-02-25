import { Fragment } from 'react';
import { Typography } from 'core-ui';

const App = () => {
  return (
    <Fragment>
      {/**Typography sizes */}
      <Typography size='1'>Typography 1</Typography>
      <Typography size='2'>Typography 2</Typography>
      <Typography size='3'>Typography 3</Typography>
      <Typography size='4'>Typography 4</Typography>
      <Typography size='5'>Typography 5</Typography>
      <Typography size='6'>Typography 6</Typography>
      {/**Typography colors */}
      <Typography size='1' color='primary'>
        Typography 1
      </Typography>
      <Typography size='1' color='success'>
        Typography 2
      </Typography>
      <Typography size='1' color='danger'>
        Typography 3
      </Typography>
      <Typography size='1' color='warning'>
        Typography 4
      </Typography>
      <Typography size='1' color='info'>
        Typography 5
      </Typography>
      <Typography size='1' color='dark'>
        Typography 6
      </Typography>
      <Typography size='1' color='light'>
        Typography 6
      </Typography>
      {/**Typography with bottom spaced */}
      <Typography spaced size='1' color='dark'>
        Typography 6
      </Typography>
    </Fragment>
  );
};

export default App;
