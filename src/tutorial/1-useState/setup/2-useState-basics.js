import React, {useState} from 'react';

const UseStateBasics = () => {
    //array destructuring
    const [text, setText] = useState('random title')

    const handleClick = () => {
        if ('random title' === text) {
            setText('hello world')
        } else {
            setText('random title')
        }
    };

    return (<React.Fragment>
        <h2>{text}</h2>
        <button className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>)
};

export default UseStateBasics;
