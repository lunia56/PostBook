import React, { useState } from "react";




// счетчик лайков
const Counter = () => {

    const [count, seCount] = useState(0)
    const [value, setValue] = useState('текст в инпуте')

    const increment = () => {
        seCount(count + 1)
    }
    const decrement = () => {
        seCount(count - 1)
    }

    return (
        <div>
            <h2>{count}</h2>
            <h2>{value}</h2>
            <input type="text"
                value={value}
                onChange={event => setValue(event.target.value)} />

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </div>
    )
}
export default Counter

