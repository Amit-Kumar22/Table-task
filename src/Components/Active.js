import React, { useEffect, useState } from 'react'
import ListItem from "./ListItem";

function Active() {
  const [list, setList] = useState([]);

  // Load list from localStorage
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Save list to localStorage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addItem = () => {
    const newItem = { id: Date.now(), text: "", price: "", dates:"",  isEditing: true };
    setList([...list, newItem ]);
  };

  const updateItem = (id, newText, newprice, newdate) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, text: newText, price:newprice, dates:newdate, isEditing: false } : item
      )
    );
  };

  const editItem = (id) => {
    setList(
      list.map((item) => (item.id === id ? { ...item, isEditing: true } : item))
    );
  };
  return (
    <div className='main-container'>
     <div className="dropdown">
              <div className="button1" onClick={addItem}>
                + Sale Order
              </div>
            </div>
      <table>
          <tr>
          <th>ID</th>
            <th>Customer Name</th>
            <th>RS Price</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>

          <tbody>
          {list.map((item, index) => (
            <ListItem key={item.id} index ={index} item={item} updateItem={updateItem} editItem={editItem} />
          ))}
        </tbody>
        </table>
    </div>
  )
}

export default Active
