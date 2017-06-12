
const {MongoClient, ObjectID} = require('mongodb');  //mongodb lib

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err){
        return console.log('Unable to connect to MogoDB server');
    }
    console.log('Connect to MongoDB server');

//     db.collection('Todos')
//         .find({_id: new ObjectID('593dd56b38baf611dc8eb086')})
//         .toArray().then((docs) =>{
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//     }, (err) =>{
//         console.log('Unable to fetch todos', err)
// })

    db.collection('Todos')
        .find()
        .toArray().then((docs) =>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) =>{
        console.log('Unable to fetch todos', err)
    })

    db.close();
});