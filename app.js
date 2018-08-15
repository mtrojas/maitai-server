require('dotenv').config();

const express = require('express'),
      app     = express();
      hbs     = require('hbs');
      path    = require('path');

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
  res.render('home');
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT, console.log(`Server listening on http://localhost:${process.env.PORT}`));
