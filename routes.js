'use strict';

module.exports = function(app) {
    var jsonsaya = require('./contoller');

    app.route('/')
.get(jsonsaya.index);
}