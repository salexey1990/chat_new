var log = require('libs/log')(module);

module.exports = function(server) {

	var io = require('socket.io').listen(server);
	io.set('origins', 'localhost:*');
	io.set('logger', log);

	io.sockets.on('connection', function(socket) {
		
		socket.on('message', function(text, cb) {
			console.log(text);
			socket.broadcast.emit('message', text);
			cb(); 
		});
	});
};