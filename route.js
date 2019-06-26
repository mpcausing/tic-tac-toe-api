const requireAll = require('require-all')

module.exports = app => {
    const routes = requireAll(`${__dirname}/app/Routes`)
    for(let r in routes) routes[r](app)
}