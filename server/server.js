const express = require('express');
const next = require('next');
var mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectId; 
var bodyParser = require('body-parser');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const formData = require('express-form-data')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const path = require('path');

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
        server.use(fileUpload());
        server.use(cors());
        server.use(formData.parse());
        server.use('/HVAL', express.static(path.join(__dirname, '../HVAL')))
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
          //let uploadFile = req.body.data.file;
          //let fileName = req.body.data.file.name;
          console.log(req.body)
          //console.log(uploadFile)
          // uploadFile.mv(
          //   `${__dirname}/public/files/${fileName}`,
          //   function (err) {
          //     if (err) {
          //       return res.status(500).send(err)
          //     }
        
          //     res.json({
          //       file: `public/${req.files.file.name}`,
          //     })
          //   },
          // )


        //   var data = req.body;
        //   var files = data.files;
        //   var id = req.body._id;
        //   delete data._id;
        //   console.log(req.body)
        //   if (!fs.existsSync('HVAL/'+data.name)){
        //     mkDirByPathSync('HVAL/'+data.name);
        // }




          // for(var i = 0; i < files.length; i++) {
          //   files[i].mv(`${__dirname}/../../HVAL/${data.name}/${files[i].name}`, (err) => {
          //     if (err) {
          //       return res.status(500).send(err);
          //     }
          //   })
          // }
          // MongoClient.connect(url, {useNewUrlParser:true}, (err, client) => {
          //   if (err) {
          //     console.log("Can't connect to server", err);
          //   } else {
          //     console.log("database connected");
          //     var db = client.db('expressApp');
          //     console.log("connection established");
          //     var collection = db.collection('students');
          //     collection.updateOne({_id:ObjectId(id)}, {$set : data}, (err, resp) => {
          //       if (err) {
          //         console.log("Can't connect to server", err);
          //       } else {
          //         console.log('successfully updated doc')
          //         res.send('success');
          //       }
          //     })
          //   }
          // })
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

      function mkDirByPathSync(targetDir, opts) {
        const isRelativeToScript = opts && opts.isRelativeToScript;
        const sep = path.sep;
        const initDir = path.isAbsolute(targetDir) ? sep : '';
        const baseDir = isRelativeToScript ? __dirname : '.';
      
        return targetDir.split(sep).reduce((parentDir, childDir) => {
          const curDir = path.resolve(baseDir, parentDir, childDir);
          try {
            fs.mkdirSync(curDir);
            console.log(`Directory ${curDir} created!`);
          } catch (err) {
            if (err.code === 'EEXIST') { // curDir already exists!
              console.log(`Directory ${curDir} already exists!`);
              return curDir;
            }
      
            // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows
            if (err.code === 'ENOENT') { // Throw the original parentDir error on curDir `ENOENT` failure.
              throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
            }
      
            const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
            if (!caughtErr || caughtErr && curDir === path.resolve(targetDir)) {
              throw err; // Throw if it's just the last created dir.
            }
          }
      
          return curDir;
        }, initDir);
      }