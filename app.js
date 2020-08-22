const path = require('path')
const express = require('express');
// const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
//Models
const models = require("./models");
dotenv.config({ path: './config/config.env' })

const app = express()


app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require("./routes/index"));


 
//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});


const port = process.env.PORT || 3000;
app.listen(
    port,
    console.log(`Server running in ${process.env.NODE_ENV} on ${port}`)
)

