// *************** FIRST AND MOST BASIC *********************

import { useCallback, useEffect, useState, useRef } from 'react';
import reactLogo from './assets/react.svg'; // Assuming you have an SVG file named react.svg in the assets folder
import viteLogo from '/vite.svg'; // Assuming you have an SVG file named vite.svg at the root level

function App(){
  const [password, setPassword] = useState(""); // State for storing generated password
  const [allowNumber, setAllowNumber] = useState(false); // State for allowing numbers in password
  const [allowCharacter, setAllowCharacter] = useState(false); // State for allowing special characters in password
  const [length, setLength] = useState(8); // State for password length, default is 8

  // useRef Hook used to make copy of password in wanted Range
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
  }, [length, allowCharacter, allowNumber , setPassword]);

  // Function to copy password to clipboard
  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect to generate password when dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [length, allowCharacter, allowNumber, passwordGenerator]);

  // Return JSX
  return (
    <>
      <div className='my-4 bg-gray-400 w-full max-w-md mx-auto shadow-lg rounded-xl text-white text-center py-2'>
        <h1>Password Generator</h1>

        <div className='mx-5 flex shdow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='text-orange-500 outline-none w-full py-1 px-3 rounded-l-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassToClip}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>

        <div className='flex items-center gap-x-2 mx-5'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="length">Length: {length}</label>

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
    </>
  );
}

export default App;



// ********************************** without Border *****************

// import { useCallback, useEffect, useState, useRef } from 'react';

// function App() {
//   const [password, setPassword] = useState("");
//   const [allowNumber, setAllowNumber] = useState(false);
//   const [allowCharacter, setAllowCharacter] = useState(false);
//   const [length, setLength] = useState(8);

//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (allowNumber) str += "1234567890";

//     if (allowCharacter) str += "!@#$%^&*()";

//     for (let i = 1; i <= length; i++) {
//       let charIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(charIndex);
//     }

//     setPassword(pass);
//   }, [length, allowCharacter, allowNumber , setPassword]);

//   const copyPassToClip = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,4);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, allowCharacter, allowNumber, passwordGenerator]);

//   return (
//     <>
//       <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
//         <h1 className="text-4xl font-bold mb-8">Password Generator</h1>

//         <div className='w-full max-w-md mx-auto rounded-lg overflow-hidden mb-4 bg-gray-800 shadow-lg'>
//           <input
//             type="text"
//             value={password}
//             className='w-full py-3 px-4 text-lg text-orange-500 outline-none'
//             placeholder='Password'
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyPassToClip}
//             className='bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 transition-colors duration-300 w-full'
//           >
//             Copy
//           </button>
//         </div>

//         <div className='flex items-center gap-x-2 mb-8'>
//           <input
//             type="range"
//             min={6}
//             max={100}
//             value={length}
//             className='cursor-pointer w-1/2'
//             onChange={(e) => { setLength(e.target.value) }}
//           />
//           <label htmlFor="length" className="text-lg">Length: {length}</label>
//         </div>

//         <div className='flex items-center gap-x-2'>
//           <input
//             type="checkbox"
//             defaultChecked={allowNumber}
//             id="allowNumber"
//             onChange={() => { setAllowNumber((prev) => !prev) }}
//           />
//           <label htmlFor="allowNumber" className="text-lg">Include Numbers</label>

//           <input
//             type="checkbox"
//             defaultChecked={allowCharacter}
//             id="allowCharacter"
//             onChange={() => { setAllowCharacter((prev) => !prev) }}
//           />
//           <label htmlFor="allowCharacter" className="text-lg">Include Special Characters</label>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;





// *********************BORDERD *********************

// import { useCallback, useEffect, useState, useRef } from 'react';

// function App() {
//   const [password, setPassword] = useState("");
//   const [allowNumber, setAllowNumber] = useState(false);
//   const [allowCharacter, setAllowCharacter] = useState(false);
//   const [length, setLength] = useState(8);

//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

//     if (allowNumber) str += "1234567890";

//     if (allowCharacter) str += "!@#$%^&*()";

//     for (let i = 1; i <= length; i++) {
//       let charIndex = Math.floor(Math.random() * str.length);
//       pass += str.charAt(charIndex);
//     }

//     setPassword(pass);
//   }, [length, allowCharacter, allowNumber , setPassword]);

//   const copyPassToClip = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0,4);
//     window.navigator.clipboard.writeText(password);
//   }, [password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, allowCharacter, allowNumber, passwordGenerator]);

//   return (
//     <>
//       <div className='flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white font-roboto'>
//         <div className="w-full max-w-md mx-auto rounded-lg overflow-hidden bg-gray-800 shadow-xl border-2  p-6">
//           <h1 className="text-4xl font-bold mb-8 text-blue-400 font-montserrat">Password Generator</h1>

//           <div className='mb-4'>
//             <input
//               type="text"
//               value={password}
//               className='w-full py-3 px-4 text-lg text-blue-400 outline-none bg-gray-800 font-montserrat'
//               placeholder='Password'
//               readOnly
//               ref={passwordRef}
//             />
//           </div>

//           <div className='flex items-center gap-x-2 mb-4'>
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className='cursor-pointer w-1/2 bg-gray-800'
//               onChange={(e) => { setLength(e.target.value) }}
//             />
//             <label htmlFor="length" className="text-lg text-blue-400 font-montserrat">Length: {length}</label>
//           </div>

//           <div className='flex items-center gap-x-2 mb-4'>
//             <input
//               type="checkbox"
//               defaultChecked={allowNumber}
//               id="allowNumber"
//               onChange={() => { setAllowNumber((prev) => !prev) }}
//             />
//             <label htmlFor="allowNumber" className="text-lg text-blue-400 font-montserrat">Include Numbers</label>

//             <input
//               type="checkbox"
//               defaultChecked={allowCharacter}
//               id="allowCharacter"
//               onChange={() => { setAllowCharacter((prev) => !prev) }}
//             />
//             <label htmlFor="allowCharacter" className="text-lg text-blue-400 font-montserrat">Include Special Characters</label>
//           </div>

//           <button
//             onClick={copyPassToClip}
//             className='bg-blue-500 hover:bg-orange-600 text-white py-3 px-6 transition-colors duration-300 w-full font-montserrat'
//           >
//             Copy Password
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
