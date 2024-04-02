import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const handleButtonClick = (e) => {
    const buttonValue = e.target.value;

    if (buttonValue === 'C') {
      setValue('');
    }
    else if (buttonValue === 'Del') {
      setValue(value.slice(0, -1));
    }
    else if (buttonValue === '=') {
      try {
        const result = eval(value);
        setValue(result.toString());
      } catch (error) {
        setValue('Error');
      }
    }
    else {
      setValue(value + buttonValue);
    }
  };

  return (
    <div className="Container">
      <div className="Cal">
        <form>
          <div className='display'>
            <input type='text' value={value} readOnly />
          </div>
          <div>
            <input type="button" value="C" onClick={handleButtonClick} />
            <input type="button" value="Del" onClick={handleButtonClick} />
            <input type="button" value="%" onClick={handleButtonClick} />
            <input type="button" value="/" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleButtonClick} />
            <input type="button" value="8" onClick={handleButtonClick} />
            <input type="button" value="9" onClick={handleButtonClick} />
            <input type="button" value="*" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleButtonClick} />
            <input type="button" value="5" onClick={handleButtonClick} />
            <input type="button" value="6" onClick={handleButtonClick} />
            <input type="button" value="-" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleButtonClick} />
            <input type="button" value="2" onClick={handleButtonClick} />
            <input type="button" value="3" onClick={handleButtonClick} />
            <input type="button" value="+" onClick={handleButtonClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleButtonClick} />
            <input type="button" value="0" onClick={handleButtonClick} />
            <input type="button" value="." onClick={handleButtonClick} />
            <input type="button" value="=" onClick={handleButtonClick} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
