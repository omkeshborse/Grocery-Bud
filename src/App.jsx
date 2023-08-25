import { useState } from "react";
import Form from "./form";
import { nanoid } from "nanoid";
import Items from "./Items";
const App = () => {
 const [items ,setItems] = useState([]) 
 const addItems =(itemsName) =>{
   const newItem = {
    name : itemsName ,
    completed : false ,
    id : nanoid() 
   }
   setItems([...items , newItem]) ;
 }
 const removeItem =(itemId) =>{
  const newItems = items.filter((item ) =>item.id !== itemId) ;
  setItems(newItems)
 }
  return <section className="section-center"> 
    <Form addItems={addItems}/>
    <Items items={items} removeItem={removeItem}/>
  </section>;
};

export default App;
