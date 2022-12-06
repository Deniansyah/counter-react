import Counter from "./components/counter"
import React from "react"

function App() {
    const [counter, setCounter] = React.useState(1)
    const [showAlert, setShowAlert] = React.useState(false)
    const condition = (val, cb) => {
        if (val >= 1 && val <= 10) {
            setShowAlert(false)
            cb();
        } else {
            setShowAlert(true)
        }
    };

    const decrement = () => {
        const newVal = counter - 1
        condition(newVal, () => {
            setCounter(newVal)
        })
    }

    const increment = () => {
        const newVal = counter + 1
        condition(newVal, () => {
            setCounter(newVal)
        })
    }

    return(
        <div className="wrapper">
            {showAlert && <div className="alert">min / max exceeded</div>}
            <div className="child-wrapper">
                <div onClick={decrement} className="btn">
                    <button>-</button>
                </div>
                <Counter>{counter}</Counter>
                <div onClick={increment} className="btn">
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default App