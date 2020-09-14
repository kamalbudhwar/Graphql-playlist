const express= require('express');
const cors=require('cors');
require('dotenv').config()
const mongoose=require('mongoose');
const {graphqlHTTP}=require('express-graphql');
const schema=require('./schema/schema');
mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.connection.once('open',()=>{
    console.log("Connected to the database")
});
const app=express();
app.use(cors());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));
app.listen(4000,()=>{
    console.log("Now listening on port 4000");
});
