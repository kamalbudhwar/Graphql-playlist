import React, { useEffect, useState } from "react";
import { gql, useQuery,useMutation} from "@apollo/client";
import { getAuthorsQuery,addBookMutation} from "../queries/queries";

function AddBook(props) {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const[addBook,{result}]=useMutation(addBookMutation);
  
  const displayAuthors = () => {
    if (loading) {
      return <option disabled>Loading Authors...</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  };

  const submitForm = (e) => {
      e.preventDefault();
      addBook({variables:{name:bookName,genre:bookGenre,authorId:authorId}});
  }

  return (
    <form id="add-Book" onSubmit={submitForm}>
      <div className="field">
        <label>Book Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          onChange={(e) => {
            setBookGenre(e.target.value);
          }}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}
export default AddBook;
