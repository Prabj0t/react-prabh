import React from "react";

// Functional component representing an input box for amount and currency type
function InputBox({
    label, // Label for the input box
    amount, // Current amount value
    onAmountChange, // Function to handle amount change
    onCurrencyChange, // Function to handle currency change
    currencyOptions = [], // Array of currency options
    selectCurrency = "usd", // Default selected currency
    amountDisable = false, // Flag to disable amount input
    currencyDisable = false, // Flag to disable currency selection
    className = "", // Optional class name for additional styling
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            {/* Input box for amount */}
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                {/* Amount input field */}
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable} // Disable input if amountDisable is true
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            {/* Select dropdown for currency type */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Label for the currency type */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                {/* Currency type dropdown */}
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable} // Disable dropdown if currencyDisable is true
                >
                    {/* Mapping through currencyOptions to render options */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                    {/* Add more options for other currencies if needed */}
                </select>
            </div>
        </div >
    );
}

export default InputBox;
