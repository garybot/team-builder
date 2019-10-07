import React, { useState } from 'react';
import './App.css';

import MemberList from "./components/MemberList.js";
import Form from "./components/Form.js";

function App() {

  const [members, setMembers] = useState([]);

  return (
    <div className="App">
      <MemberList members={members}/>
      <Form members={members} setter={setMembers} />
    </div>
  );
}

export default App;
