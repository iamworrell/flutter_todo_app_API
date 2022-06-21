const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//Imports Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res)=>{
    res.send('We are on home');
});

console.log(process.env.DB_CONNECTION)

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, 
{useNewUrlParser: true},
() => console.log('connected to DB!'));

mongoose.connect(process.env.DB_CONNECTION, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  /*.then(() => {
    const exampleOne = new Example({
      title: 'Don Quixote',
      author: 'M. Cervantes'
    })
  
    exampleOne.save().then(res => {
      console.log(res)
      mongoose.connection.close()
    })
  })
  .catch(err => {
    // handle error
  })*/


//Listen To Server
app.listen(8000);