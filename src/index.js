const express = require('express');
const expbhs = require('express-handlebars');
const path = require('path');

// Initializations 
const app = express();

// Settings
//app.use(express.static(path.join(__dirname, 'src')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhs({ // motor de plantilla configurado
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs', // nombre de la extensión
}));
app.set('view engine', '.hbs');

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Para poder recibir json

// Routes
app.use(require('./routes/routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start Server
app.listen(3011, () => {
    console.log('Server on port', 3011);
});
