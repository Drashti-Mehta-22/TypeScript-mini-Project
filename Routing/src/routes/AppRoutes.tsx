import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Userlist from '../pages/Userlist';
import UserDetail from '../pages/UserDetail';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Userlist />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default AppRoutes;
