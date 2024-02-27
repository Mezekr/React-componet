import { useState } from "react";
import { BookCard } from "../bookCard/BookCard";

export const MainView = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Eloquent JavaScript" },
    { id: 2, title: "Mastering JavaScript Functional Programming" },
    { id: 3, title: "JavaScript: The Good Parts" },
    { id: 4, title: "JavaScript: The Definitive Guide" },
    { id: 5, title: "The Road to React" },
  ]);
  if (books === 0) return <div>Books list is empty!</div>;

  return (
    <div>
      {books.map((book) => {
        // return <div key={book.id}>{book.title}</div>;
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};
