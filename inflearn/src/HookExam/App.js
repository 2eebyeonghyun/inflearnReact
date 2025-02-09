import React, { useState } from "react";
import ClassComponents from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {

    const [toggle, setToggle] = useState(true);

    return(
        <>
            {toggle && <ClassComponents />}
            {toggle || <FunctionalComponent />}

            <hr />

            <button onClick={() => setToggle((t) => !t)}>toggle</button>
        </>
    );
}

export default App;
