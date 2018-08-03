const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const expressMongoDb = require('express-mongo-db');

const app = express();
app.use(express.static('./dist'));
app.use(
  expressMongoDb(
    'mongodb://application:Password!@cluster0-shard-00-00-sqj6w.mongodb.net:27017,cluster0-shard-00-01-sqj6w.mongodb.net:27017,cluster0-shard-00-02-sqj6w.mongodb.net:27017/application?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
  )
);
app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port ' + (process.env.PORT || 3000))
);

app.get('/getUsers', async (req, res) => {
  const returnedUsers = await req.db
    .collection('userData')
    .find({})
    .toArray();
  res.send(returnedUsers);
});

app.get('/getActivities', async (req, res) => {
  const returnedActivities = await req.db
    .collection('activities')
    .find({})
    .toArray();
  res.send(returnedActivities);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
