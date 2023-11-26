'use strict';

var response = require('./res');
var connecion = require('./koneksi');


exports.index = function(req, res){
    response.ok("Aplikasi REST API saya berjalan dengan lancar!")
};