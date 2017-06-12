/**
 * Created by xiao xia zheng on 2017-06-11.
 */
// const MongoClient = require('mongodb').MongoClient;  //mongodb lib
const {MongoClient, ObjectID} = require('mongodb');  //mongodb lib
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err){
        return console.log('Unable to connect to MogoDB server');
    }
    console.log('Connect to MongoDB server');


    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, res) =>{
    //     if (err){
    //         return console.log ('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // })
    //
    // db.collection('User').insertOne({
    //     name: 'xiao xia',
    //     age: 20,
    //     localtion: 'quebec'
    // }, (err, res) =>{
    //     if (err){
    //         return console.log ('Unable to insert user', err)
    //     }
    //     // console.log(JSON.stringify(res.ops, undefined, 2));
    //     console.log(res.ops[0]._id.getTimestamp());
    // })

    db.close();
});