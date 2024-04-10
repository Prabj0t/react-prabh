import Chai from './Prabh'; // Importing the chai component

// Defining the App component
function App() {

  const username = "chai aur code"
  return (
    // JSX allows us to write HTML-like syntax in JavaScript
    // We can define our UI components using JSX and render them
    // JSX gets compiled to React.createElement calls by Babel
    // This JSX code renders an h1 element with the specified text
    <>
    <Chai/>
    <h1>chai pekr code kro with {username}</h1>
    </>
  );
}

export default App; // Exporting the App component
