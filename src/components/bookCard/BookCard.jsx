export const BookCard = ({ book, index, onBookClick }) => {
  return (
    <div
      className="book-list"
      onClick={() => {
        onBookClick(book);
      }}
    >
      {index +1}. {book.title}
    </div>
  );
};
