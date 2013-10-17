/**
 * Determine if current link should be active. Uses the curPath() from router.js.
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
Handlebars.registerHelper('active', function(path) {
    return curPath() == path ? 'active' : '';
});