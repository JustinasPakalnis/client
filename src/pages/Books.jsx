import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const Boooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchAllBOoks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBOoks();
  }, []);
  return (
    <div>
      <h1>Stupid book shop</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add new Book</Link>
      </button>
    </div>
  );
};

export default Boooks;
