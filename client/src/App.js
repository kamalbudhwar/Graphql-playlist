import React from "react";
import { ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
//Components
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});
function App(props) {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>My Favoruite Book Collection</h1>
        <BookList />
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
