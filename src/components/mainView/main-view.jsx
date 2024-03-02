import { useState, useEffect } from "react";
import { BookCard } from "../bookCard/BookCard";
import { BookView } from "../book-view/book-view";
import searchIcon from "./../../asset/search.svg";

const API_URL = "https://openlibrary.org/search.json";

export const MainView = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchBook = async (title) => {
    const response = await fetch(`${API_URL}?q=${title}`);
    const data = await response.json();
    // console.log(data.docs);
    const booksFromApi = data.docs.map((doc) => {
      return {
        id: doc.key,
        title: doc.title,
        image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
        author: doc.author_name?.[0],
      };
    });
    setBooks(booksFromApi);
  };

  useEffect(() => {
    searchBook(searchTerm);
  }, []);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook)
    return (
      <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
    );
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search a book"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {
            searchBook(searchTerm);
          }}
        />
      </div>
      <div>
        {books?.length <= 0 && searchTerm !== "" ? (
          <div className="empty">
            <h2>Books list is empty!</h2>
          </div>
        ) : (
          <div className="books-container">
            {books.map((book, index) => {
              return (
                <BookCard
                  key={book.id}
                  book={book}
                  index={index}
                  onBookClick={(newSelectedBook) =>
                    setSelectedBook(newSelectedBook)
                  }
                />
              );
            })}
          </div>
        )}
      </div>
      );
    </>
  );
};
export default MainView;
