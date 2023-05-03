const http = require('http');
const MongoClient = require('mongodb').MongoClient;

const uri="mongodb+srv://jay:mandha@cluster0.2b4epwa.mongodb.net/?retryWrites=true&w=majority"
async function findsomedata(client){
    const cursor=client.db("airport").collection("airportinfo").find({});
    const results= await cursor.toArray();
    console.log(results);
}
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB database');
  
  const collection = client.db('airport').collection('airportinfo'); // replace with your collection name

  const server = http.createServer(function(req, res) {
    if (req.method === 'GET' && req.url === '/api') {
      axios.get('https://example.com/api')
      .then(response => {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(response.data));
        res.end();
      })
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    collection.find().toArray(function(err, docs) {
      if (err) {
        console.error(err);
        res.write('Error retrieving data from MongoDB');
      } else {
        res.write(JSON.stringify(docs));
      }
      res.end();
    });
  }
  });

  server.listen(3005, function() {
    console.log('Server listening on http://localhost:3005/');
  });
});
async function main(){
    const uri="mongodb+srv://jay:mandha@cluster0.2b4epwa.mongodb.net/?retryWrites=true&w=majority"
    const client= new MongoClient(uri);
    try{
    await client.connect();
    await findsomedata(client);
    }
    catch(e){
        await console.error(e);
    
    }
    finally{
        await client.close();
   
    }
    client.connect();
    client.close();
    }
    main();
