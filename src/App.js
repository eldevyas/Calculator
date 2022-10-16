import './App.css';
import React, { useState, useEffect} from 'react';




function Calculator() {

    // Declaring State for the First Number
    const [firstValue, setFirstValue] = useState();

    // Declaring State for the Second Number
    const [secondValue, setSecondValue] = useState();

    const handleFirstChange = (e) => {
        setFirstValue(e.target.value);
    }

    const handleSecondChange = (e) => {
        setSecondValue(e.target.value);
    }

    return(
        <>
            <div className="Calculator">
                <input type="text" placeholder="First Value" value={firstValue} onChange={handleFirstChange} />
                <input type="text" placeholder="Second Value" value={secondValue} onChange={handleSecondChange} />

                <div className="Buttons">
                    <button className="btn btn-default">SUM</button>
                    <button className="btn btn-default">POWER</button>
                    <button className="btn btn-default">ROOT</button>
                </div>
            </div>
        </>
    )
}



function App() {
  return (
    <div className="App">
        <Calculator/>
    </div>
  );
}

export default App;
