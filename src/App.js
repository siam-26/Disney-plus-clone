import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Home /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
