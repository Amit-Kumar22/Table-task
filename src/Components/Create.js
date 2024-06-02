// import React, { useState, useEffect } from 'react';


// const Create = () => {
//   const [list, setList] = useState([]);
//   const [currentItem, setCurrentItem] = useState(null);

//   // Load list from localStorage
//   useEffect(() => {
//     const storedList = JSON.parse(localStorage.getItem('list'));
//     if (storedList) {
//       setList(storedList);
//     }
//   }, []);

//   // Save list to localStorage
//   useEffect(() => {
//     localStorage.setItem('list', JSON.stringify(list));
//   }, [list]);

//   const addItem = () => {
//     const newItem = { id: Date.now(), text: '', isEditing: true };
//     setList([...list, newItem]);
//   };

//   const updateItem = (id, newText) => {
//     setList(list.map(item => (item.id === id ? { ...item, text: newText, isEditing: false } : item)));
//   };

//   const editItem = id => {
//     setList(list.map(item => (item.id === id ? { ...item, isEditing: true } : item)));
//   };

//   return (
//     <div>
//       <h1>My List</h1>
//       <button onClick={addItem}>Create</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map(item => (
//             <ListItem key={item.id} item={item} updateItem={updateItem} editItem={editItem} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Create;
