import React, { useState, useEffect } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    "mname":"",
    "email":"",
    "mrole":""
  });
  const onInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.memberToEdit.mname) {
      props.editMember(formData);
    } else {
      props.addMember(formData);
    }
    setFormData({
    "mname":"",
    "email":"",
    "mrole":""
    });
  };
  useEffect(() => {
    setFormData(props.memberToEdit);
  }, [props.memberToEdit]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="mnameInput">Name:</label>
      <input type="text" id="mnameInput" name="mname" value={formData.mname} onChange={onInputChange} />
      <label htmlFor="emailInput">Email:</label>
      <input type="email" id="emailInput" name="email" value={formData.email} onChange={onInputChange} />
      <label htmlFor="mroleInput">Role:</label>
      <select id="mroleInput" name="mrole" value={formData.mrole} onChange={onInputChange} >
        <option value="">Select a Role</option>
        <option value="1">Frontend Engineer</option>
        <option value="2">Backend Engineer</option>
        <option value="3">Designer</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default Form;