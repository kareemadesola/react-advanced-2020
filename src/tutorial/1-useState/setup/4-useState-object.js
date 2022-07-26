import React, {useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({name: 'person', age: 24, message: 'random message'})
    console.log(person)

    function changeMessage() {
        setPerson({...person, message: 'hello world'})
    }

    return <>
        <h2>useState object example</h2>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.message}</h3>
        <button className='btn' onClick={changeMessage}>change message</button>
    </>
};

export default UseStateObject;
