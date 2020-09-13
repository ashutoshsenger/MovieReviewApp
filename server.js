const express = require('express');

const app = express();

app.use(express.static('./dist/movie-rating-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/movie-rating-app/'}
  );
});

app.listen(process.env.PORT || 8080);