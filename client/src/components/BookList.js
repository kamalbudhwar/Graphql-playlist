import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList(props) {
  const[selected,setSelected]=useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);
  const displayBooks = () => {
    if (loading) {
      return <div>Loading books...............</div>;
    } else {
      return data.books.map((book,index) => {
        return <li key={index} onClick={(e)=>{setSelected(book.id)}}>{book.name}</li>;
      });
    }
  };
  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookid={selected}/>
    </div>
  );
}
export default BookList;
