const express= require('express');
const mongoose=require('mongoose');
const {graphqlHTTP}=require('express-graphql');
const schema=require('./schema/schema')
mongoose.connect("mongodb+srv://Kamal:Happy123@cluster0.jof5b.mongodb.net/gql?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log("Connected to the database")
});
const app=express();
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));
app.listen(4000,()=>{
    console.log("Now listening on port 4000");
});
