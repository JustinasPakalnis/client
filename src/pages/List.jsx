import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const List = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="listContainer">
      <ul className="list">
        <div className="title">
          <p>Item</p>
          <p>Owner</p>
          <p>Location</p>
          <p>Value</p>
        </div>

        {items.map((items, index) => (
          <li
            className={index % 2 === 0 ? "listItem" : "listItem2"}
            key={items.id}
          >
            <p>{items.item}</p>
            <p>{items.owner}</p>
            <p>{items.location}</p>
            <p>{items.value.toFixed(2)} Eur</p>
            <button className="button" onClick={() => handleDelete(items.id)}>
              Delete
            </button>
            <button className="button">
              <Link to={`/update/${items.id}`}>Update</Link>
            </button>
          </li>
        ))}
      </ul>
      <button>
        <Link to="/add">Add new item</Link>
      </button>
    </div>
  );
};

export default List;
