const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const arr = ['text 1', 'text 2', 'text 3' ];
 
app.get('/', (req, res) => {
  res.render('index', {
      arr: arr
  });
});
 
app.get('/create', (req, res) => {
  res.render('create');
});

app.post('/create', (req, res) => {
  arr.push(req.body.text);
  res.redirect('/');
});



app.listen(3000, () => console.log('Прослушивается порт :3000'));
