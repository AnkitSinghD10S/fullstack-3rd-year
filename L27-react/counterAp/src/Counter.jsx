import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(15);
    // let count=15;
    let addCounter = () => {
        setCount(count+1);
        console.log(count);
        setCount(count+1);
        console.log(count);
        setCount(count+1);
        console.log(count);
        setCount(count+1);
        console.log(count);
    };
    return (
        <>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={addCounter}>
                add count
            </button>
            <button
                onClick={() => {
                    setCount(count--);
                }}
            >
                {" "}
                decrease count
            </button>
        </>
    );
};

export default Counter;
