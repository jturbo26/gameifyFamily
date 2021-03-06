const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const expressMongoDb = require('express-mongo-db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));
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

app.get('/getRewards', async (req, res) => {
  const returnedRewards = await req.db
    .collection('rewards')
    .find({})
    .toArray();
  res.send(returnedRewards);
});

app.get('/getActivities', async (req, res) => {
  const returnedActivities = await req.db
    .collection('activities')
    .find({})
    .toArray();
  res.send(returnedActivities);
});

app.post('/addPoints', async (req, res) => {
  const userDb = req.db.collection('userData');
  const query = { name: req.body.user.name };
  const newValues = { $set: { pointsValue: req.body.user.pointsValue + req.body.points } };
  userDb.updateOne(query, newValues, (err, dbResponse) => {
    if (err) {
      console.log('there was an errror => ', err);
      res.status(500).send('There was an error updating the points.', err);
      userDb.close();
    }
    res.status(200).send(dbResponse);
  });
});

app.post('/setPoints', async (req, res) => {
  const userDb = req.db.collection('userData');
  const query = { name: req.body.user.name };
  const newValues = { $set: { pointsValue: req.body.points } };
  userDb.updateOne(query, newValues, (err, dbResponse) => {
    if (err) {
      console.log('there was an errror => ', err);
      res.status(500).send('There was an error updating the points.', err);
      userDb.close();
    }
    res.status(200).send(dbResponse);
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
