
const MongoClient = require('mongodb').MongoClient;
const dbConstants = require('../consts/config').get();



CryptoDataService =  {
    getLatestData: () => {
        return new Promise(function(resolve, reject) {

        MongoClient.connect(dbConstants.url, (err, client) => {
            if(err) {
                console.log(err);
                reject(err);
                return;
            }
            console.log('database connected');
            const db = client.db(dbConstants.database);
            db.collection(dbConstants.collection).find({}).sort({timestamp: -1}).limit(1).toArray(function (err, docs) {
                if(err) {
                    console.log(err);
                    reject(err);
                    return;
                }
                // console.log(docs[0]);
                if(!docs[0]) {
                    reject(new Error('Collections not defined'))
                }
                resolve(docs[0]);

                client.close();
            });

        });
        });
    }
}
module.exports = CryptoDataService;