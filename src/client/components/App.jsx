import React, { Fragment } from 'react';
import Button from './button'

const App = props=>{

    const handleClick = ()=>{
        console.log("I work");
    }
    return (
        <Fragment>
            <h1>Hello World!!!!</h1>
            <Button handleClick={handleClick} />
        </Fragment>
    )
}

export default App;