var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/gallery', routes.views.gallery);
	app.get('/credits', routes.views.credits);
	app.get('/video', routes.views.video);
	app.get('/press', routes.views.press);
	app.get('/provaGallery', routes.views.provaGallery);
	app.all('/contact', routes.views.contact);

	
};
