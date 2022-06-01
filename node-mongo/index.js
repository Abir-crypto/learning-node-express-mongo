const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');


const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err, null);

    console.log("Connected to the server");

    const db = client.db(dbname);
    
    dboper.insertDocument(db, { "name": "dudu", "description": "yumm" }, 'dishes', (result) => {
       
        console.log('Insert document: \n', result);

        dboper.findDocuments(db, 'dishes', (docs) => {
            console.log('Found documents:\n', docs);

            dboper.updateDocument(db, { 'name': 'dudu' }, { 'description': 'so soft and tasty' }, 'dishes', (result) => {
                
                console.log('Updated Document: \n', result);
                
                dboper.findDocuments(db, 'dishes', (docs) => {
                    console.log('Found Documents: \n', docs);;
                    db.dropCollection('dishes', (docs) => {
                        console.log('Dropped Collection: ', docs);

                        client.close();
                    });
                });
            });
        });
    });

});