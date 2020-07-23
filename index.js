const express = require('express');
const app = express();
const db = require('./models')
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
 
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use( express.static('public'));



const frontendRoutes = require("./controllers/frontend.js");
app.use(frontendRoutes);

const userRoutes = require("./controllers/user.js");
app.use("/api/users", userRoutes);

const patchRoutes = require("./controllers/patch.js");
app.use("/api/patches", patchRoutes);

db.sequelize.sync({force:false}).then(function(){
    app.listen(PORT);
})