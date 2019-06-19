/**
 * Main application routes
 * @author: Julian Herrera Giraldo <julitom25@gmail.com>
 */

// Import Endpoints
const helloWorld = require('./api/helloworld');
// New Line
const product = require('./api/products');

module.exports = (app) => {
    app.use('/api/helloworld', helloWorld);
    // New line
    app.use('/api/products', product);
};