const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {


    app.use('/blog/news', newsRouter);

    app.use('/blog/', siteRouter);
   
    
    
}

module.exports = route;