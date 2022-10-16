import './App.css';
import React, { useState } from 'react';

function SumButton(props) {
    let firstValue = props.firstValue;
    let secondValue = props.secondValue;
    const setResult = props.setResult;

    const handleSum = () => {
        const finalResult = Number(firstValue) + Number(secondValue);
        setResult(finalResult);
    }

    return <button onClick={handleSum}> <span>Sum</span></button>;
}

function PowerButton(props) {
    let firstValue = props.firstValue;
    let secondValue = props.secondValue;
    const setResult = props.setResult;

    const handlePower = () => {
        const finalResult = Number(firstValue) * Number(secondValue);
        setResult(finalResult);
    }

    return <button onClick={handlePower}> <span>Power</span></button>;
}


function RootButton(props) {
    let firstValue = props.firstValue;
    let secondValue = props.secondValue;
    const setResult = props.setResult;

    const handleRoot = () => {
        // Hadchi fih lmath rbek
        let A = Number(firstValue);
        let B = Number(secondValue);

        function calcHypotenuse(a, b) {
            return (Math.sqrt((a * a) + (b * b)));
        }

        var Formula = calcHypotenuse(A, B);

        setResult(Formula);
    }

    return <button onClick={handleRoot}> <span>Root</span></button>;

}

function Calculator() {
    // Declaring State for the First Number
    const [firstValue, setFirstValue] = useState(0);

    // Declaring State for the Second Number
    const [secondValue, setSecondValue] = useState(0);

    // Declaring State for the Third Number (Result)
    const [Result, setResult] = useState(0);


    const handleFirstChange = (e) => {
        setFirstValue(e.target.value);
    }

    const handleSecondChange = (e) => {
        setSecondValue(e.target.value);
    }

    return(
        <>
            <div className="Calculator">
                <input type="number" placeholder="First Value" value={firstValue} onChange={handleFirstChange} />
                <input type="number" placeholder="Second Value" value={secondValue} onChange={handleSecondChange} />

                <div className="Buttons">
                    <SumButton firstValue={firstValue} secondValue={secondValue} setResult={setResult}/>
                    <PowerButton firstValue={firstValue} secondValue={secondValue} setResult={setResult}/>
                    <RootButton firstValue={firstValue} secondValue={secondValue} setResult={setResult}/>
                </div>

                <input type="number" disabled placeholder="Result" value={Result}/>
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
