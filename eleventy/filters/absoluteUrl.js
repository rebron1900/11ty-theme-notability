/* ***** ----------------------------------------------- ***** **
/* ***** Absolute URL Filter
/* ***** ----------------------------------------------- ***** */

const { envUrls } = require('../../config.js')
const homeUrl = envUrls[process.env.NODE_ENV.trim()]


module.exports = (value) => {
  return homeUrl ? homeUrl + value : value;
}
