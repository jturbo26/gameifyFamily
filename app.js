const path = require('path');

const express = require('express');
const app = express();
app.use(express.static('./dist'));
app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port ' + (process.env.PORT || 3000))
);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
