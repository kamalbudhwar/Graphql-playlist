import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

function BookList(props) {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...............</div>;
    } else {
      return data.books.map((book,index) => {
        return <li key={index}>{book.name}</li>;
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
}
export default BookList;
