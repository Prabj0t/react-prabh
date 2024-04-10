import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM library from client module
import App from './App.jsx'; // Importing the App component from App.jsx file


// const reactElement = {
//   type: 'a', // Element type
//   props: {
//       href: 'https://google.com', // Props of the element
//       target: '_blank'
//   },
//   children: 'Click me to visit Google' // Children of the element
// };


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// using react
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', // Props of the element
    target: '_blank'
  },
  'Now with React Created Element'
)





// Rendering the App component wrapped in React.StrictMode
// using ReactDOM.createRoot method
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);
