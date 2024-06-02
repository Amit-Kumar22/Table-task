import React, { useEffect, useState } from "react";

function Completed() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("list"));
    if (storedList) {
      setList(storedList);
    }
  }, []);
  return (
    <div className="main2-container">
      <table>
        <tr>
        <th>ID</th>
          <th>Customer Name</th>
          <th>RS Price</th>
          <th>Last Modified</th>
        </tr>

        <tbody>
          
            {list.map((item, index) => (
              <tr>
              <td>{index+1}</td>
                <td>{item.text}</td>
                <td>{item.price}</td>
                <td>{item.dates}</td>
              </tr>
            ))}
         
        </tbody>
      </table>
    </div>
  );
}

export default Completed;
