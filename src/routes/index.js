const meRouter = require('./me');
const singRouter = require('./music');
const siteRouter = require('./site');

function route(app) {
    app.use('/me', meRouter);
    app.use('/music',singRouter );
    app.use('/', siteRouter);
}
module.exports = route;
