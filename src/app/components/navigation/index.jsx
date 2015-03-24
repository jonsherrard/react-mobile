// CSS
require('./navigation.styl')

var React = require('react')

class Navigation extends React.Component {

  getDefaultProps () {
    return {
      appName: "Demo App"
    }
  }

  _goBack () {
    this.context.router.goBack()
  }

  _backButton () {
    if (this.context.router.getCurrentPathname() !== '/') {
      return (
        <span
          onClick={this._goBack.bind(this)}
          className="navigation-block__back-button"
        >
          <svg  x="0px" y="0px" className="navigation-block__svg"
             width="75.629px" height="75.629px" viewBox="10.148 12.185 75.629 75.629" enable-background="new 10.148 12.185 75.629 75.629"
            >
            <circle fill="none" stroke="#ffffff" stroke-width="6" stroke-miterlimit="10" cx="47.963" cy="50" r="34.815"/>
            <polygon fill="#fff" stroke="#fff" points="69.443,52.222 34.629,52.222 45,62.592 39.074,62.592 26.481,50 39.074,37.407 45,37.407 34.629,47.777 
              69.443,47.777   "/>
          </svg>
        </span>
      )
    }
  }

  render () {
    return (
      <div className="navigation-block">
        {this._backButton()}
        <span className="navigation-block__title">
          {this.props.appName}
        </span>
      </div>
    )
  }

}

Navigation.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = Navigation
