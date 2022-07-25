import React from 'react';
import {data} from '../../../data';

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data)

    const removeItem = id => {
        setPeople(people.filter(person => person.id !== id))
    };

    return <>
        <h2>useState array example</h2>
        {
            people.map(person =>
                <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={() => removeItem(person.id)}>remove</button>
                </div>)
        }
        <button className='btn' onClick={() => setPeople([])}>
            clear items
        </button>

    </>
};

export default UseStateArray;
