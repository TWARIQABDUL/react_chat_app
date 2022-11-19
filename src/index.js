import React, {useState}from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Friends from './pages/friends';
import Messages from './pages/messages';
import Notification from './pages/notification';
import Market from './pages/market';
import Message from './pages/message';
import {SessionProvider} from './session/session';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <SessionProvider>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App />} />
        <Route path='/friends' element={<Friends/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/notifications' element={<Notification/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/message' element={<Message/>} />
      </Routes>
    </BrowserRouter>
    </SessionProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();