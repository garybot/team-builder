import React from "react";
import Member from "./Member.js";

function MemberList(props) {
  return (
    <div>
      {
        props.members.map(member => <Member key={member.id} member={member} editor={props.editor} />)
      }
    </div>
  )
}

export default MemberList;