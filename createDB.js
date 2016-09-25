var User = require('models/user').User;
// var user = new User({
// 	username: 'Tester4',
// 	password: 'secret'
// });

// user.save(function(err, user, affected) {
// 	User.findOne({username: 'Tester2'}, function(err, tester) {
// 		console.log(tester);
// 	});
// });

User.findOne({username: 'Tester3'}, function(err, tester) {
		console.log(tester);
	});