import React, { useState, useEffect } from 'react';
import ConverterInput from '../UI/ConverterInput/ConverterInput.jsx';
import ConverterSelect from '../UI/ConverterDropdown/ConverterSelect.tsx';
import ButtonSwap from '../UI/ButtonSwap/ButtonSwap.jsx';
import styles from './Converter.module.scss'

const CurrencyConverter = () => {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');

  const conversionRates = {
    USD: 1,
    EUR: 0.85,
    UAH: 27.3,
  };

  useEffect(() => {
    if (amount1 && currency1 && currency2) {
      handleCalculate();
    }
  }, [amount1, currency1, currency2]);

  const handleSwap = () => {
    const tempAmount = amount1;
    const tempCurrency = currency1;

    setAmount1(amount2);
    setCurrency1(currency2);

    setAmount2(tempAmount);
    setCurrency2(tempCurrency);
  };

  const handleCalculate = () => {
    const rate = conversionRates[currency2] / conversionRates[currency1];
    setAmount2((amount1 * rate).toFixed(4));
  };

  return (
    <div className={styles['converter-wrapper']}>
      <div className={styles['converter__control-section']}>
        <ConverterInput
          type="number"
          value={amount1}
          label={currency1}
          onChange={(e) => setAmount1(e.target.value)}
        />
        <ConverterSelect
          value={currency1}
          onChange={(e) => setCurrency1(e.target.value)}
          objects={conversionRates}
        >
        </ConverterSelect>
        <ButtonSwap onClick={handleSwap}/>
        <ConverterSelect
          value={currency2}
          onChange={(e) => setCurrency2(e.target.value)}
          objects={conversionRates}
        >      
        </ConverterSelect>
        <ConverterInput
          type="number"
          label={currency2}
          value={amount2}
          readOnly
        />
      </div>
    </div>
  );
};

export default CurrencyConverter;