import React, {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);


    return (
        <>
            <h1>Count is : {count}</h1>
            <button onClick={()=> setCount(count+1)} >Click to Increase Counter</button>
        </>
    )
}
export default App;
