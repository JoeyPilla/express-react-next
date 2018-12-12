const express = require('express');
const next = require('next');
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId; 
var bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

var url = 'mongodb://localhost:27017/expressApp';
var MongoClient = mongodb.MongoClient;

MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
  if (err) {
    console.log("Can't connect to server", err);
  } else {
    console.log("database connected");
  }
})

app.prepare()
      .then(() => {
        const server = express()
        server.use(bodyParser.urlencoded({ extended: false }))
        server.use(bodyParser.json())

        server.get('/', (req, res) => {
          return app.render(req, res, '/index', req.query)
        })

        server.get('/api/getDevices', (req, res) => {
          MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
            if (err) {
              console.log("Can't connect to server", err);
            } else {
              console.log("database connected");
              var db = client.db('expressApp');
              console.log("connection established");
              var collection = db.collection('students');
              collection.find({}).toArray((err, result) => {
                if(err) {
                  console.log("error getting the collection", err);
                } else if (result.length){
                   res.send({resp: result});
                } else {
                  // res.send('No documents found');
                }
                client.close();
            })
            }
          })
        })
        
        server.post('/api/updateDevice', function(req, res) {
          var data = req.body;
          var id = req.body._id;
          delete data._id;
          MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
            if (err) {
              console.log("Can't connect to server", err);
            } else {
              console.log("database connected");
              var db = client.db('expressApp');
              console.log("connection established");
              var collection = db.collection('students');
              collection.updateOne({_id:ObjectId(id)}, {$set : data}, (err, resp) => {
                if (err) {
                  console.log("Can't connect to server", err);
                } else {
                  console.log('successfully updated doc')
                  res.send('success');
                }
              })
            }
          })
        });

        server.get('/api/getDevice/:id', (req, res) => {
          console.log('here')
          var id = req.params.id;
          console.log(id)
          MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
            if (err) {
              console.log("Can't connect to server", err);
            } else {
              console.log("database connected");
              var db = client.db('expressApp');
              console.log("connection established");
              var collection = db.collection('students');
              collection.find(ObjectId(id)).toArray((err, result) => {
                if(err) {
                  console.log("error getting the collection", err);
                } else if (result.length){
                  console.log(result)
                   res.send({resp: result});
                } else {
                  // res.send('No documents found');
                }
                client.close();
            })
            }
          })
        })

        server.get('*', (req, res) => {
          return handle(req, res)
        })

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      })