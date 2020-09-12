const graphql = require("graphql");
const _ = require("lodash");
const books = [
  { name: "The Lock", genre: "Fantasy", id: "1",authorId:"1" },
  { name: "Hot summer", genre: "Fantasy", id: "2",authorId:"3" },
  { name: "Science Era", genre: "Fantasy", id: "3",authorId:"1" },
  { name: "The hero of magic", genre: "Comic", id: "4",authorId:"2" },
  { name: "The Rainbow", genre: "Comic", id: "4",authorId:"2" },
];
const authors=[
    {name:"kamal",age:26,id:"1"}
    ,{name:"Tony",age:36,id:"2"},
    {name:"Robert",age:34,id:"3"}
]
const { GraphQLObjectType, GraphQLString, GraphQLSchema,GraphQLID,GraphQLInt} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author:{type:AuthorType,
        resolve(parent,args){
        console.log(parent);
        return _.find(authors,{id:parent.authorId})
    }},    
  }),
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age:{type:GraphQLInt}
    }),
  });

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
        //code to get data from db or from other source.
      },
    },
    author:{
        type: AuthorType,
        args:{id:{type:GraphQLID}},
        resolve(parent, args) {
            return _.find(authors, { id: args.id });
            //code to get data from db or from other source.
          },
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
