var levelup = require('levelup')

if (process.browser) {
  var down = require('level-js')
} else {
  var down = require('leveldown')
}

module.exports = levelup('./friendsdb', {db: down})
