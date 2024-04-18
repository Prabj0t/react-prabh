import { useEffect, useState } from "react";

// Custom hook to fetch currency information based on the provided currency code
function useCurrencyInfo(currency) {
    // State to hold the currency data
    const [data, setData] = useState({})

    // useEffect hook to perform side effects (fetching data) when the currency code changes
    useEffect(() => {
        // Fetch currency data from the API using the provided currency code
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json()) // Parse the response as JSON
            .then((res) => setData(res[currency])) // Set the fetched data to the state
            .catch((error) => console.error("Error fetching currency data:", error)); // Handle any errors

        // Log useful information for debugging purposes
        console.log(`data is -> ${data}`); // This will log the current value of 'data'
        console.log(`currency is -> ${currency}`); // This will log the current value of 'currency'
        
        // Note: 'res' is not accessible here as it's scoped to the inner function of the promise chain
        // console.log(`res is -> ${res}`); // This would cause an error

        // Note: This console.log() statement will execute immediately when the component renders
        // It will not reflect the updated 'data' state after the fetch operation
        console.log(data);
        
        // Dependency array [currency] ensures that this effect runs only when 'currency' changes
    }, [currency])

    // Log 'data' outside the useEffect to see its value on every render
    console.log(data);

    // Return the fetched currency data
    return data;
}

export default useCurrencyInfo; // Export the custom hook for use in other components
