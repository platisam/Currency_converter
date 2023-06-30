import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);

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

        <select>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>

        <select>
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
