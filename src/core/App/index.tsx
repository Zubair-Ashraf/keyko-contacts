import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'core/Routes';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
