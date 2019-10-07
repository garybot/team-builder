import React, { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    "mname": "",
    "email":"",
    "mrole":""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };
  const addMember = event => {
    event.preventDefault();
    props.setter([
      ...props.members,
      formData
    ]);
  };

  return (
    <form onSubmit={addMember}>
      <label htmlFor="mnameInput">Name:</label>
      <input type="text" id="mnameInput" name="mname" onChange={onInputChange} />
      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" name="email" onChange={onInputChange} />
      <label htmlFor="mroleInput">Role:</label>
      <select id="mroleInput" name="mrole" onChange={onInputChange} >
        <option value="1">Frontend Engineer</option>
        <option value="2">Backend Engineer</option>
        <option value="3">Designer</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default Form;