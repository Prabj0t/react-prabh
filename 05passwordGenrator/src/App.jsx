import { useCallback, useEffect, useState, useRef } from 'react';
import reactLogo from './assets/react.svg'; // Assuming you have an SVG file named react.svg in the assets folder
import viteLogo from '/vite.svg'; // Assuming you have an SVG file named vite.svg at the root level

function App() {
  const [password, setPassword] = useState(""); // State for storing generated password
  const [allowNumber, setAllowNumber] = useState(false); // State for allowing numbers in password
  const [allowCharacter, setAllowCharacter] = useState(false); // State for allowing special characters in password
  const [length, setLength] = useState(8); // State for password length, default is 8

  //useRef Hook
  const passwordRef = useRef(null);

  // Function to generate password
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Variable to store generated password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // String containing upper and lower case alphabets

    // If allowNumber is true, append numbers to the string
    if (allowNumber) str += "1234567890";

    // If allowCharacter is true, append special characters to the string
    if (allowCharacter) str += "!@#$%^&*()";

    // Generate password characters
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); // Generate random index within the length of the string
      pass += str.charAt(charIndex); // Append character at the random index to the password
    }

    // Set the generated password to the state
    setPassword(pass);
  }, [length, allowCharacter, allowNumber, setPassword]); // Dependency array for useCallback

  const copyPassToClip = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  },[password])

  
  useEffect(() => {
    passwordGenerator()
  }, [length, allowCharacter, allowNumber, passwordGenerator])
  // passwordGenerator() //this give error  so we have to use useEffect hooks
  // Return JSX
  return (
    <>
      <div className='my-4   bg-gray-400 w-full max-w-md mx-auto shadow-lg rounded-xl text-white text-center py-2'>
        <h1>password Generator</h1>

        <div className='mx-5 flex shdow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            className='text-orange-500  outline-none w-full py-1 px-3 rounded-l-lg ' placeholder='Password' 
            readOnly
            ref={password} />

          <button
            onClick={copyPassToClip}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy
          </button>
        </div>

        <div className='flex items-center gap-x-2 mx-5'>
          <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }} />
          <label htmlFor="length">length: {length}</label>


          <input
            type="checkbox"
            defaultChecked={allowNumber}
            id="allowNumber"
            onChange={() => { setAllowNumber((prev) => !prev) }}
          />
          <label htmlFor="allowNumber">Number</label>


          <input
            type="checkbox"
            defaultChecked={allowCharacter}
            id="allowCharacter"
            onChange={() => { setAllowCharacter((prev) => !prev) }}
          />
          <label htmlFor="allowCharacter">Character</label>
        </div>

      </div>
      {/* Add JSX for password input, length selection, and checkboxes for numbers and characters */}
    </>
  );
}

export default App;
