import React from "react";
function Input(probs)
{
    return <input type = {probs.type} placeholder={probs.placeholder} />
}
export default Input;