import React from "react";

function Member(props) {
  const roles = {
    "1": "Frontend Engineer",
    "2": "Backend Engineer",
    "3": "Designer"
  }
  return (
    <div>
      <h3>{props.member.mname}</h3>
      <p>{roles[props.member.mrole]}</p>
      <p>{props.member.email}</p>

      <button onClick={() => props.editor(props.member)}>Edit</button>
    </div>
  )
}

export default Member;