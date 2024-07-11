import React, {useState} from "react";
import styles from './Calculator.css'

function Calculator() {
    const [number, setNumber] = useState('')

    function clickButton(event) {
        setNumber(number + event.target.value) 
    }
    function resetCalc() {
        setNumber('')
    }
    function equalButton() {
        if (number.startsWith('*') || number.startsWith('/')) {
            setNumber('Error')
        } else {
        const evaluate = eval(number)
        setNumber(evaluate)
    }
    }
    return (
        <div className="Calculator">
            <div className="display" id="display">{number}</div>
            <div className="buttons">
                    <button className="orange" onClick={clickButton} value={'+'}>+</button>
                    <button className="grey" onClick={clickButton} value={7}>7</button>
                    <button className="grey" onClick={clickButton} value={8}>8</button>
                    <button className="grey" onClick={clickButton} value={9}>9</button>
                    <button className="orange" onClick={clickButton} value={'-'}>-</button>
                    <button className="grey" onClick={clickButton} value={4}>4</button>
                    <button className="grey" onClick={clickButton} value={5}>5</button>
                    <button className="grey" onClick={clickButton} value={6}>6</button>
                    <button className="orange" onClick={clickButton} value={'*'}>*</button>
                    <button className="grey" onClick={clickButton} value={1}>1</button>
                    <button className="grey" onClick={clickButton} value={2}>2</button>
                    <button className="grey" onClick={clickButton} value={3}>3</button>
                    <button className="orange" onClick={clickButton} value={'/'}>/</button>
                    <button className="grey" onClick={clickButton} value={0}>0</button>
                    <button className="grey" onClick={clickButton} value={'.'}>.</button>
                    <button className="grey" onClick={equalButton}>=</button>
                    <button className="orange" id="c" onClick={resetCalc}>c</button>
            </div>
        </div>
    )
}

export default Calculator