// CSS
require('./app.styl')

var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup')
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var iScroll = require('iscroll/build/iscroll-probe')


// Components
var Navigation = require('components/navigation')
var Tabs = require('components/tabs')

const APPNAME = "React Mobile"

class App extends React.Component {

  constructor() {
    this.state = {
      yScrollPosition: 0
    }
  }

  componentDidMount () {
    this.iScroll = new iScroll(this.refs.scroller.getDOMNode(), {probeType: 1, scrollY: true, mousewheel: true})
  }

  componentDidUpdate () {
    this.iScroll.refresh()
    this.iScroll.scrollTo(0,0)
  }

  render () {
    var name = this.context.router.getCurrentPath()
    return (
      <div className="app-block">
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
        <Tabs />
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
}

module.exports = App
