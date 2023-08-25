import { useState } from "react";
import Form from "./form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { ToastContainer ,toast } from "react-toastify";

const getLocalStorage = () => {
  let list =JSON.parse(localStorage.getItem('list')) || []
  return list
};
const setLocalStorage = (items  )=>{
  localStorage.setItem('list' , JSON.stringify(items))
}
const App = () => {
  
 const [items, setItems] = useState(getLocalStorage()); 
 const addItems =(itemsName) =>{
   const newItem = {
    name : itemsName ,
    completed : false ,
    id : nanoid() 
   }
   const newItems = [...items, newItem];
   setItems(newItems) ;
   setLocalStorage(newItems);
   toast.success(`${itemsName} added successfully`);
 }
 const removeItem =(itemId) =>{
  const newItems = items.filter((item ) =>item.id !== itemId) ;
  setItems(newItems) ;
  setLocalStorage(newItems) ;
  toast.success(` item deleted successfully`);
 }
 const editItem = (itemId)=>{
  const newItems = items.map(( item) =>{
    if (item.id === itemId) {
      const newItem = {...item , completed : !item.completed}
      return newItem 
    }
    return item;
  })
  setItems(newItems);
  setLocalStorage(newItems);
 }
  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={2000} pauseOnFocusLoss="true" draggable/>
      <Form addItems={addItems} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
