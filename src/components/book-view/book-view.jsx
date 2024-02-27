export const BookView = ({ book, onBackClick }) => {
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
      <button onClick={onBackClick}>Back</button>
    </>
  );
};
