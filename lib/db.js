//TODO
const {MongoClient} = require('mongodb');
const {config} = require('../config');

class DB {
    constructor(){
        this.client = new MongoClient(config.mongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this.dbName = config.dbName; 
    }

    connect(){
        DB.connection = new Promise((resolve, reject) => {
            this.client.connect(err => {
                if (err){
                    reject(err);
                }

                console.log('Sucessfully conect to MongoDB');
                resolve(this.client.db(this.dbName));
            })
        });

        return DB.connection;

        getAll(collection, query){

        }

        get(collection, id){

        }

        create(collection, data){

        }

        update(collection, id){

        }

        Delete(collection, id){

        }
    }
}

module.exports = DB;