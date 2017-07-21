var express = require('express');
var router  = require('./routes/router');
var bodyParser      = require('body-parser');
var errorhandler    = require('errorhandler');
var cookieParser    = require('cookie-parser');

var app = express();
var port = 5000;

class Server {

    constructor() {
        this.initExpressMiddleWare();
        this.initRoutes();
        this.start();
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initExpressMiddleWare() {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        //app.use(errorhandler());
        //app.use(cookieParser());


        //process.on('uncaughtException', (err) => {
        //    if (err) console.log(err, err.stack);
        //});
    }
    initRoutes() {
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
        app.all('/*', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
    }
}

var server = new Server();