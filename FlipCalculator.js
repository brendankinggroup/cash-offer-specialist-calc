import React, { useState } from 'react';

function FlipCalculator() {
  const [arv, setArv] = useState('');
  const [repairs, setRepairs] = useState('');
  const [maxOffer, setMaxOffer] = useState(null);

  const handleCalculate = () => {
    const arvValue = parseFloat(arv) || 0;
    const repairsValue = parseFloat(repairs) || 0;
    const offer = arvValue * 0.7 - repairsValue;
    setMaxOffer(offer);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Flip Calculator</h1>
      <div>
        <label>
          ARV:
          <input
            type="number"
            value={arv}
            onChange={(e) => setArv(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Repairs:
          <input
            type="number"
            value={repairs}
            onChange={(e) => setRepairs(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {maxOffer !== null && (
        <p>Maximum Offer: ${maxOffer.toFixed(2)}</p>
      )}
    </div>
  );
}

export default FlipCalculator;

