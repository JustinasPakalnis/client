import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    item: "",
    owner: "",
    location: "",
    value: null,
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(book);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update selected book</h1>
      <input
        type="text"
        placeholder="item"
        onChange={handleChange}
        name="item"
      />
      <input
        type="text"
        placeholder="owner"
        onChange={handleChange}
        name="owner"
      />
      <input
        type="text"
        placeholder="location"
        onChange={handleChange}
        name="location"
      />
      <input
        type="number"
        placeholder="value"
        onChange={handleChange}
        name="value"
      />
      <button className="formButton" onClick={handleClick}>
        UPDATE
      </button>
    </div>
  );
};

export default Update;
