const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/movie-rating-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/movie-rating-app/index.html'));
});

app.listen(process.env.PORT || 8080);