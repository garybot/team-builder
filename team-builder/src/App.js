import React, { useState } from 'react';
import './App.css';

import MemberList from "./components/MemberList.js";
import Form from "./components/Form.js";

function App() {

  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState({});


  const addMember = (formData) => {
    const member = {...formData, "id":Date.now()}
    setMembers([...members, member]);
  };

  const editMember = (formData) => {
    setMembers([...members].map(member => {
      if (member.id === memberToEdit.id) {
        return formData;
      } else {
        return member;
      }
    }));
    setMemberToEdit({});
  }

  return (
    <div className="App">
      <MemberList editor={setMemberToEdit} members={members}/>
      <Form memberToEdit={memberToEdit} editMember={editMember} members={members} addMember={addMember} />
    </div>
  );
}

export default App;
