const exchangeRates = {
    "USD": {
        "INR": 80,
        "KWD": 0.3,
        "SAR": 3.75
    },
    "INR": {
        "USD": 0.0125,
        "KWD": 0.00375,
        "SAR": 0.047
    },
    "KWD": {
        "USD": 3.33,
        "INR": 266.67,
        "SAR": 12.50
    },
    "SAR": {
        "USD": 0.27,
        "INR": 21.33,
        "KWD": 0.080
    }
};

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    let result = 0;

    if (fromCurrency === toCurrency) {
        result = amount;
    } else {
        result = amount * exchangeRates[fromCurrency][toCurrency];
    }

    document.getElementById('result').innerText = `Converted Amount: ${result.toFixed(2)} ${toCurrency}`;
}
