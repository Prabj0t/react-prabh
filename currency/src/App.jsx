import { useState } from 'react'; // Importing useState hook from React
import { InputBox } from './components'; // Importing InputBox component
import useCurrencyInfo from './hooks/useCurrencyInfo'; // Importing custom hook useCurrencyInfo
import './App.css'; // Importing CSS file for styling

function App() {
    // State variables for input amount, currency from, currency to, and converted amount
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('usd');
    const [to, setTo] = useState('inr');
    const [convertedAmount, setConvertedAmount] = useState(0);

    // Fetching currency exchange rate information based on the selected "from" currency
    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo); // Extracting currency options from fetched data

    // Function to swap "from" and "to" currencies
    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    // Function to convert currency based on the input amount and selected currencies
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    };

    return (
        <div className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, }}>
            <div className="bg-white bg-opacity-30 p-8 rounded-lg max-w-md w-full">
                <form onSubmit={(e) => {
                    e.preventDefault(); // Prevent default form submission behavior
                    convert(); // Call convert function on form submission
                }}>
                    <div className="mb-4">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className=" mb-4">
                        <button
                            type="button"
                            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-5 py-3"
                            onClick={swap} // Call swap function on button click
                        >
                            Swap
                        </button>
                    </div>
                    <div className="mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
