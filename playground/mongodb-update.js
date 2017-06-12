
const {MongoClient, ObjectID} = require('mongodb');  //mongodb lib

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err){
        return console.log('Unable to connect to MogoDB server');
    }
    console.log('Connect to MongoDB server');

    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('593dd56b38baf611dc8eb086')},
        {$set: {completed: false}},
        {returnOriginal:false}
    ).then((result) => {console.log(result)})

    db.close();
});