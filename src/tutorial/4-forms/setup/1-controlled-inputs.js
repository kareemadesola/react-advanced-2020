import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstName, email);
    if (firstName && email) {
      const person = { id: new Date().getTime(), firstName, email };
      people.push(person);
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstname">Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
      </article>
      {people.map((person) => (
        <div className="item" key={person.id}>
          <h4>{person.firstName}</h4>
          <p>{person.email}</p>
        </div>
      ))}
    </>
  );
};

export default ControlledInputs;
