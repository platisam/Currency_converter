import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");

  return (
    <div className="App">
      <header className="App-header">
        <p>Currency Converter</p>
      </header>
      <div className="content">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
    </div>
  );
}

export default App;
