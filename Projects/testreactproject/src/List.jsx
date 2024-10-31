import React from "react";
function List(probs)
{
    return <ul>
    <li>Created by {probs.name}</li>
    <li>Copyright {probs.fullYear}</li>
      {probs.hr < 12 ?  <li style={probs.goodMorning}>Good Morning {((probs.hr + 11) % 12 + 1)} AM </li>
      : (probs.hr > 12 &&  probs.hr < 18)? <li style={probs.goodEve}>Good Evening {((probs.hr + 11) % 12 + 1)} PM </li> 
      : <li style={probs.goodNight}>Good Night {((probs.hr + 11) % 12 + 1)} PM</li>}
  </ul>
}
export default List;