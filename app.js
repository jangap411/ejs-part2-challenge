const express = require('express');
const app = express();
const challengeRoute = require('./routes/challenge');
const PORT = process.env.PORT || 3000;

//set view engine
app.set('view engine','ejs');

//set routes
app.use(challengeRoute);

//use static resources, load css.
app.use(express.static('./'))

//listen port
app.listen(PORT, ()=>{
  console.log(`Server running \nhttp://localhost:${PORT}/`)
});

