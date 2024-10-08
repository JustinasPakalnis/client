import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const List = () => {
  const [items, setItems] = useState([]);

  const fetchAllItems = async () => {
    try {
      const res = await axios.get("http://localhost:8800/books");
      setItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
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
    <>
      <button className="addItem">
        <Link to="/add">Add new item</Link>
      </button>
      <div className="listContainer">
        <hr />
        <div className="title">
          <div className="summary">
            <p>Total warehouse amount: </p>
            <p>{items.length}</p>
          </div>
          <div className="summary">
            <p>Total warehouse value: </p>
            <p>
              {items.reduce((acc, currentItem) => acc + currentItem.value, 0)}
              {` Eur`}
            </p>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default List;
