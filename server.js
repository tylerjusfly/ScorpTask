const express = require('express')


const app = express();

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

const db = require('./models/index')
db.sequelize
  .sync({alter : true});


app.listen('3000', ()=> {
  console.log('app is listening on port 3000')
})