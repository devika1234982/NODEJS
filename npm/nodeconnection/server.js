// connection btw node & database


// const {MongoClient}=require('mongodb')
// const mongourl="mongodb://localhost:27017/"
// const client=new MongoClient(mongourl);
// function connection(){
//     client.connect();
//     console.log("database connected successfully")
// }

// connection()

// ...........................................................................

const {MongoClient}=require('mongodb')
const mongourl="mongodb://localhost:27017/"
const client=new MongoClient(mongourl);
const mydb=client.db("mydatabase");
const usercollection=mydb.collection("myuser")
async function connection(){
    await client.connect();
    console.log("database connected successfully")
    const result=await usercollection.insertOne({name:"devika",age:"21"});
    console.log("data successfully uploaded", result.insertedId)
    const data=await usercollection.find()
    console.log(data);
    await client.close()
}

connection()

