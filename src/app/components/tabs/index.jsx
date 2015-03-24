//CSS
require('./tabs.styl')

var React = require('react')

var { Link } = require('react-router')

class Tabs extends React.Component {
  render () {
    return (
      <div className="tabs-block">
        <Link to="home" className="tabs-block__button">
          Home
        </Link>
        <Link to="settings" className="tabs-block__button">
          Settings
        </Link>
      </div>
    )
  }
}

module.exports = Tabs
