//CSS
require('./tabs.styl')

var React = require('react')

class Tabs extends React.Component {
  render () {
    return (
      <div className="tabs-block">
        <span>Tabs</span>
      </div>
    )
  }
}

module.exports = Tabs
