import React, { useState } from "react";
import { add } from "./Calculator";
function AppList() {
    const [inputTxt, setInputTxt] = useState("");
    const [addArray, setAddArray] = useState([]);

    function handleOnChange(event) {
        const newVal = event.target.value;
        setInputTxt(newVal);
    }

    function handleOnClick() {
        // setAddArray((prev) => {
        //     return [...prev, inputTxt];
        // })
        setAddArray([...addArray, inputTxt]); //
        setInputTxt("");
    }
    // function deleteItem(event) {
    //     const index = event.target.value;
    //     //console.log(addArray);

    //     setAddArray((prev) => {
    //         return prev.filter((current, id) => {
    //             return id !== index;
    //         });
    //     });
    // }
    function deleteItem(event) {
        const index = event.target.value
        setAddArray([...addArray.filter((current, id) => {
            return id !== index;
        })]); 
    }

    return <div>
        <input type="text" onChange={handleOnChange} placeHolder="enter the item" value={inputTxt} />
        <button onClick={handleOnClick}> <span>Add</span></button>
        <ui>
            {addArray.map((item, id) => <li key={id} value={id} onClick={deleteItem}> {item}</li>)}
        </ui>
    </div>
}

export default AppList;