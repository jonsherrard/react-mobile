var React = require('react')
var { Route, DefaultRoute, Redirect } = require('react-router')

// Require the main App
var App = require('../index.jsx')

//  Pages
var SettingsPage = require('screens/settings')
var HomePage = require('screens/home')

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route name="home" path="/" handler={HomePage} />
    <Route name="settings" path="/settings" handler={SettingsPage} />
  </Route>
)
