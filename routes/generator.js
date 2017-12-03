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

router.get('/sample/table', function(req, res, next) {
	var data = new Array();
	var total = 1000;

	for(var i=0;i <= total ;i++){
		var dataRandom = {
			name : faker.name.findName(),
			phone : faker.phone.phoneNumber(),
			email : faker.internet.email(),
			finance : {
				account : faker.finance.account(),
				accountName : faker.finance.accountName(),
				amount : faker.finance.amount(),
			},
			company : {
				companyName : faker.company.companyName(),
				companySuffix: faker.company.companySuffix()
			},
			address : {
				street : faker.address.streetName(),
				city : faker.address.city(),
				state : faker.address.state(),
				country : faker.address.country(),
			}
		}

		data[i] = dataRandom;
	}

	res.json(data);
});

module.exports = router;
