import React from "react";
import Member from "./Member.js";

function MemberList(props) {
  return (
    <div>
      {
        props.members.map(member => <Member key={member.mname} member={member} />)
      }
    </div>
  )
}

export default MemberList;