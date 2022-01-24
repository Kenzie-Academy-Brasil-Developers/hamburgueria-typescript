import React from 'react';
import './App.css';
import { Routes } from './routes';
import { ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Routes/>

      <ToastContainer
      position="top-center"
      autoClose={50}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </div>
  );
}

export default App;
