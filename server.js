const express = require('express')


const app = express();
var port = process.env.DB_PORT || '3000';
// app.set('port', port);

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const db = require('./models/index')
db.sequelize
  .sync({alter : true});


app.listen(port, ()=> {
  console.log('app is listening on port 3000')
})