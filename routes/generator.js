var express = require('express');
var router = express.Router();
var faker = require('faker');
faker.locale = "id_ID";
/* GET Generator Route. */
router.get('/', function(req, res, next) {
	res.send('My name '+faker.name.findName())
});

router.get('/sample/data', function(req, res, next) {
	var data = new Object;
	var dataRandom = {
		name : faker.name.findName(),
		phone : faker.phone.phoneNumber(),
		email : faker.internet.email()
	}

	res.json(dataRandom);
});

module.exports = router;
