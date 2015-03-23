var { create: createRouter } = require('react-router');
var routes = require('./routes.jsx');

var router = createRouter({
  routes: routes
});

module.exports = router;

