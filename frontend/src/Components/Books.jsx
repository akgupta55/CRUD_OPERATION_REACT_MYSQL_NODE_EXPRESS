import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.css";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBoooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBoooks();
  }, []);

  return (
    <div className="books">
      <h1>Ajay book store</h1>
      <div className="book">
        {books.map((book) => (
          <div className="card" key={book.id}>
            {<img src={book.cover} alt="" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <div className="btn">
              <button className="danger">Delete</button>
              <button>Update</button>
            </div>
          </div>
        ))}
      </div>
      <button className="addbtn">
        <Link to="/add">Add A Book</Link>
      </button>
    </div>
  );
};

export default Books;
