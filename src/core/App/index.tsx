import { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'core/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
