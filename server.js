const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors')

//const router = require('./components/message/network')
const router = require('./network/routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//app.use(router);

app.use(cors())
router(app);


const port = process.env.PORT || 3000;
console.log(port)

app.use('/app', express.static('public'));


app.listen(port);

console.log('la aplicacion està escuchando en http://localhost:3000');

