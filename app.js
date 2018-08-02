const path = require('path');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.static('./dist'));
app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port ' + (process.env.PORT || 3000))
);
const mongoConnectionUrl =
  'mongodb+srv://application:Password!@cluster0-sqj6w.mongodb.net/application?retryWrites=true';

app.get('/getActivities', async (req, res) => {
  MongoClient.connect(mongoConnectionUrl, async (err, client) => {
    const activitiesDb = client.db('application').collection('activities');
    const returnedActivities = await activitiesDb.find({}).toArray();
    console.log('returnedActivities', returnedActivities);
    client.close();
    res.send(returnedActivities);
  });
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
