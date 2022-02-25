import { Fragment } from 'react';
import { Table } from 'core-ui';

const App = () => {
  return (
    <Fragment>
      {/**Table */}
      <Table
        header={['Name', 'Last Name', 'Email', 'Phone']}
        data={[
          {
            name: 'Zubair',
            lastName: 'Ashraf',
            email: 'zubair@gmail.com',
            phone: '9201901913',
          },
        ]}
      />
    </Fragment>
  );
};

export default App;
