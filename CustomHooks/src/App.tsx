import React from 'react';
// import Users from './pages/Users';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  )
};

export default App;