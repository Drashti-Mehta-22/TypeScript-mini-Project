import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Users from '../pages/Users';
import UserDetail from '../pages/UserDetail';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default AppRoutes;