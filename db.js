const{MongoClient} = require('mongodb');
const { func } = require('prop-types');

async function main(){
    // connection URI. Updatee <username>, <password>, and <your-cluster-url> to reflect your clusteere.
    // see https://docs.mongodb.com/ecosystem/drivers/node/ for mor details
    const uri= mongodburi;


    const client = new MongoClient(uri);

    try {
        // connect to the mongodb cluster
        await client.connect();
        // make the appropriate DB calls
        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach(db => console.log(`-${db.name}`));
};


//another way to connect mongodb atlas using mongoose
const mongoose = require ('mongoose');
const uri = mongodburi;
mongoose.connect(uri,{useNewUrlParser:true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('Database connected');
});
module.exports = db;
