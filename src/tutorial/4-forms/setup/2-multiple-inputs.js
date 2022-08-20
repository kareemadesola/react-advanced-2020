import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (person.age > 0 && person.firstName && person.email) {
  //     people.push(person);
  //     setPerson({ firstName: "", email: "", age: "" });
  //   } else {
  //     console.log("empty value");
  //   }
  // };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age > 0) {
      person.id = new Date().getTime();
      //unexpected behaviour
      people.push(person);
      // setPeople([...people, person]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };

  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              // onChange={(e) =>
              //   setPerson({ ...person, firstName: e.target.value })
              // }
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              // onChange={(e) => setPerson({ ...person, email: e.target.value })}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              // onChange={(e) => setPerson({ ...person, age: e.target.value })}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
