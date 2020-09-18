import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";
function BookDetails(props) {
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: props.bookid } });
  const displayBookDetails=()=>{
      const{book}=data;
      if(book){
          return(
              <div>
                  <h2>{book.name}</h2>
                  <p>{book.genre}</p>
                  <p>{book.author.name}</p>
                  <p>All Books by this author:</p>
                  <ul className="other-books">
                      {
                          book.author.books.map((item)=>{return(<li key={item.id}>{item.name}</li>)})
                      }
                  </ul>
              </div>
          )
      }
      else{
          return(
              <div>No Book Selected!!!!</div>
          )
      }
  }
  if (loading) return null;
  else if (error) return `Error!!${error}`;
  else if(data){
    return (
      <div id="book-details">
        {displayBookDetails()}
      </div>
    );
  }
}

export default BookDetails;
