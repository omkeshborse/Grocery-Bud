import { useState } from "react";

const SingleItem = ({ item, removeItem }) => {
  const [isChecked , setIsChecked ] = useState(item.completed) ;
  return (
    <div className="single-item">
      <input type="checkbox" name="" id="" checked={isChecked} onChange={()=>{setIsChecked(!isChecked);}} />
      <p style={{textDecoration : isChecked && 'line-through' , textTransform : "capitalize"}}>{item.name}</p>
      <button className="btn remove-btn" type="button" onClick={()=>removeItem(item.id)}>
        delete
      </button>
    </div>
  );
};
export default SingleItem