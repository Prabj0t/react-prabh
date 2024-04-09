import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library from client module
import App from './App.jsx'; // Importing the App component from App.jsx file

// Rendering the App component wrapped in React.StrictMode
// using ReactDOM.createRoot method
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
);
