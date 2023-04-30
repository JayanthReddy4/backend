const {MongoClient}= require('mongodb');
var http= require('http');

const uri="mongodb+srv://jay:mandha@cluster0.2b4epwa.mongodb.net/?retryWrites=true&w=majority"
async function findsomedata(client){
    const cursor=client.db("airport").collection("airportinfo").find({});
    const results= await cursor.toArray();
    console.log(results);
}
http.createServer(function (req, res) {
    MongoClient.connect(uri, function(err, airport) {
        if (err) throw err;
        db.collection("airportinfo").find({}).toArray(function(err, result) {
            if (err) throw err;
            var query = result;
            db.close();
            res.write(query);
            res.end();
        });
    });
}).listen(8085);
async function main(){
const uri="mongodb+srv://jay:mandha@cluster0.2b4epwa.mongodb.net/?retryWrites=true&w=majority"
const client= new MongoClient(uri);
try{
await client.connect();
console.log("Yayy connection was established");
await findsomedata(client);
}
catch(e){
    await console.error(e);

}
finally{
    await client.close();
    console.log("connection is  closed");
}
client.connect();
client.close();
}
main();
