import { BookCard } from "../bookCard/BookCard";

export const BookCard = ({ book }) => {
  return (
    <>
      <img src={book.image} />
      <div>
        <span>Title: </span>
        <span>{book.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{book.author}</span>
      </div>
    </>
  );
};
