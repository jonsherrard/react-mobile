var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup')
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

// CSS
require('./app.styl')

// Components
var Navigation = require('components/navigation')

const APPNAME = "React Mobile"

class App extends React.Component {

  render () {
    var params = this.context.router.getCurrentPath()
    console.log(params)
    var name = this.context.router.getCurrentPath()
    return (
      <div>
        <Navigation appName={APPNAME} />
        <div className="inner-app-block">
          <TransitionGroup
            component='div'
            className={`page-transition page-${name}`}
            transitionName='page-left-right'
          >
            <RouteHandler 
              key={name}
              appName={APPNAME}
              {...this.props}
            />
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = App
