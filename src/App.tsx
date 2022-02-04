import './App.css';

import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage/HomePage';
import NewCardPage from './routes/NewCardPage/NewCardPage';

const App: FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    {/* <Route path="/all" element={<TasksPage />} />
    <Route path="/new" element={<NewCardPage />} />
    */}
    <Route path="/new" element={<NewCardPage />} />
  </Routes>
);

// тут мы делаем роуты

export default App;
