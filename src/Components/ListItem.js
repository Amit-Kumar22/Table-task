import React, { useState } from "react";
import "../Css/Home.css";

const ListItem = ({ item,index, updateItem, editItem }) => {
  const [name, setName] = useState(item.text);
  const [price, setPrice] = useState(item.price);
  const [modified, setModified] = useState(item.dates);

  const handleUpdate = () => {
    updateItem(item.id, name, price, modified);
  };

  return (
    <tr>
      {item.isEditing ? (
        <>
        <td>{index+1}</td>
          <td>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </td>
          <td>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </td>
          <td>
            <input type="text" value={modified} onChange = {(e) => setModified(e.target.value)} />
          </td>
        </>
      ) : (
       <>
       <td>{index+1}</td>
       <td>{item.text}</td>
        <td>{item.price}</td>
        <td>{item.dates}</td>
        </>
    )}
        <td>
        {item.isEditing ? (
          <button onClick={handleUpdate}>Save</button>
        ) : (
          <div onClick={() => editItem(item.id)} className="edit-btn">...</div>
        )}
      </td>
    </tr>
  );
};

export default ListItem;
