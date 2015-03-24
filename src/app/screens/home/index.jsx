var React = require('react')
var { Link } = require('react-router')



class Home extends React.Component {

  _renderList () {
    var listArray = []
    for (var i =0; i < 100; i++) {
      listArray.push(<li key={i} >Test {i} </li>)
    }
    return listArray
  }

  render () {
    return (
      <div className="page">
        <h1>Home</h1>
        <Link to="settings">Settings</Link>
        <ul>
          {this._renderList()}
        </ul>
      </div>
    )
  }
}

module.exports = Home
