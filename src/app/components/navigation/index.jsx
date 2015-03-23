// CSS
require('./navigation.styl')

var React = require('react')

class Navigation extends React.Component {

  getDefaultProps () {
    return {
      appName: "Demo App"
    }
  }

  render () {
    return (
      <div className="navigation-block">
        <span className="navigation-block__title">
          {this.props.appName}
        </span>
      </div>
    )
  }

}

module.exports = Navigation
