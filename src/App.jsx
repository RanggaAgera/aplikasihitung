import React, { useState } from 'react';

function MinMaxCounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Hitung</h1>
      <p>Nilai saat ini: {count}</p>
      <button onClick={handleDecrement}>Kurangi</button>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default MinMaxCounterApp;
