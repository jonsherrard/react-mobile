var React = require('react')
var { Link } = require('react-router')

class Settings extends React.Component {
  constructor () {
    console.log('Settings Screen')
  }

  render () {
    return (
      <div className="page page-settings">
        <h1>Settings</h1>
        <Link to="home">Home</Link>
      </div>
    )
  }
}

module.exports = Settings
