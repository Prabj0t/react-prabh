// Method to render a React-like element into a container
function customRender(reactElement, container) {

    /* Original Method */
    /*
    const domElement = document.createElement(reactElement.type); // Create a DOM element based on the type of React element
    domElement.innerHTML = reactElement.children; // Set the inner HTML of the DOM element to the children of the React element
    domElement.setAttribute('href', reactElement.props.href); // Set the 'href' attribute of the DOM element
    domElement.setAttribute('target', reactElement.props.target); // Set the 'target' attribute of the DOM element
    container.appendChild(domElement); // Append the DOM element to the container
    */

    /* Improved Method: Loop-based */
    const domElement = document.createElement(reactElement.type); // Create a DOM element based on the type of React element
    domElement.innerHTML = reactElement.children; // Set the inner HTML of the DOM element to the children of the React element
    for (const prop in reactElement.props) { // Loop through each property in the props object
        if (prop === 'children') continue; // Skip 'children' property
        domElement.setAttribute(prop, reactElement.props[prop]); // Set each attribute of the DOM element
    }
    container.appendChild(domElement); // Append the DOM element to the container
}

// Define a React-like element

// BUNDLER CONVERT THIS FORMAT OF WRITING CODE coz the other HTML method of writing same code is easy than this
const reactElement = {
    type: 'a', // Element type
    props: {
        href: 'https://google.com', // Props of the element
        target: '_blank'
    },
    children: 'Click me to visit Google' // Children of the element
};

const mainContainer = document.querySelector('#root'); // Get the container where the React element will be rendered
customRender(reactElement, mainContainer); // Render the React element into the container
