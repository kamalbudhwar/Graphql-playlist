import {gql} from '@apollo/client';
const getBooksQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;
const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }`;
const addBookMutation=gql` 
mutation AddBook($name:String!,$genre:String!,$authorId:ID!){
  addBook(name:$name,genre:$genre,authorId:$authorId){
    name
  }
}`
export {getBooksQuery,getAuthorsQuery,addBookMutation}