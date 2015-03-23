var { create: createRouter } = require('react-router')
var routes = require('./config/routes.jsx')

var router = createRouter({
  routes: routes
});

module.exports = router

