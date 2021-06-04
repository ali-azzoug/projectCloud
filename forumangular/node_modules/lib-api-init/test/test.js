var Rpc = require('lib-http-rpc')();
var iface = require('../index.js');

var rpc = Rpc.NewFromInterface(iface);

rpc.getRouter({})
rpc.getClient()
