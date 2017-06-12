/**
 * Created by xiao xia zheng on 2017-06-11.
 */
const {MongoClient, ObjectID} = require('mongodb');  //mongodb lib

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err){
        return console.log('Unable to connect to MogoDB server');
    }
    console.log('Connect to MongoDB server');


// db.collection('Todos').deleteMany({text: "something to do"}).then((result)=>{
//     console.log(result);
// })


// db.collection('todos').deleteMany({text: "This is from postman"}).then((result)=>{
//     console.log(result);
// })


// db.collection('Todos').deleteOne({text: "wash dishes"}).then((result)=>{
//     console.log(result);
// })

db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
})



db.close();
});