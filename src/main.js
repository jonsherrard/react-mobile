require('./base.styl')

var Fastclick = require('fastclick')
Fastclick.attach(document.body)

var React = require('react')
var router = require('./app/router')

var contentNode = document.getElementById('content')

router.run((Handler, state) => {
  React.render(<Handler params={state.params} />, contentNode)
})
