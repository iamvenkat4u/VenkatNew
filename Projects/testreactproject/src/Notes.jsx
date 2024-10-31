import React from "react";

function Notes(probs) {
    return <div contentEditable="true" className="note">
        <p>Your Name is : {probs.name}</p>
        <p>Your lucky number is : 5</p>
    </div>
}

export default Notes;