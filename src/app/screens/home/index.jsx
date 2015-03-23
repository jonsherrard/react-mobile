var React = require('react')
var { Link } = require('react-router')

class Home extends React.Component {

  constructor () {
    console.log('Home Screen')
  }

  render () {
    return (
      <div className="page">
        <h1>Home</h1>
        <Link to="settings">Settings</Link>
      </div>
    )
  }
}

module.exports = Home
