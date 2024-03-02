export const BookView = ({ book, onBackClick }) => {
  return (
    <div className="book">
      <img src={book.image} />
      <div className="book-detail">
        <div>
          <span>Title: </span>
          <span>{book.title}</span>
        </div>
        <div>
          <span>Author: </span>
          <span>{book.author}</span>
        </div>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
