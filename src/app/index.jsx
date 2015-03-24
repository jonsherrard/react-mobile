// CSS
require('./app.styl')

var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup')
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var iScroll = require('iscroll')


// Components
var Navigation = require('components/navigation')

const APPNAME = "React Mobile"

class App extends React.Component {

  componentDidMount () {
    this.iScroll = new iScroll(this.refs.scroller.getDOMNode(), {scrollY: true, mousewheel: true})
    console.log(this.iScroll)
  }

  render () {
    var name = this.context.router.getCurrentPath()
    return (
      <div>
        <Navigation appName={APPNAME} />
        <div className="inner-app-block" ref="scroller">
          <div className="inner-app-block__scroller">
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
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = App
