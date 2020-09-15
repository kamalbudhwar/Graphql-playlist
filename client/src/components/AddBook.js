import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

function AddBook(props) {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const displayAuthors = () => {
    if (loading) {
        return (<option disabled>Loading Authors...</option>)
    } else {
       return data.authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>);
    } 
  };
  return (
    <form id="add-Book">
      <div className="field">
        <label>Book Name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}
export default AddBook;
