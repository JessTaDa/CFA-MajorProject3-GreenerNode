const mongoose = require('mongoose');
const Scan = require('../models/Scan');

exports.getScan = (req, res) => {
	Scan.find()
		.then((scans) => {
			res.render('index', {
				title: 'Scans',
				scans: scans
			})
		})
};

exports.editScan = (req, res) => {
	Scan.findOne({ _id: req.params.id })
		.then(scan => {
			res.render('editScan', {scan: scan});
		})
}


//
// exports.createScan = (req, res) => {
// 	// console.log('reqy.body is:', req.body);
// 	const data = req.query.scan_data;
// 	let scan = new Scan();
// 	scan.data = data;
// 	scan.save()
// 		.then(() => {
// 			res.redirect('/')
// 		})
// 	}

// exports.createScan = (req, res) => {
// 	// console.log('reqy.body is:', req.body);
// 	const v_data = req.query.v;
// 	const cafe_id_data = req.query.cafe_id;
// 	const address_data = req.query.address;
//
// 	let scan = new Scan();
// 	scan.v = v_data;
// 	scan.cafe_id= cafe_id_data;
// 	scan.address = address_data;
// 	scan.save()
// 		.then(() => {
// 			res.redirect('/')
// 		})
// 	}

exports.createScan = (req, res) => {
	console.log(req.query);
	const v_data = req.query.v;
	const cafe_id_data = req.query.cafe_id;
	const address_data = req.query.address;

	let scan = new Scan();
	scan.v = v_data;
	scan.cafe_id= cafe_id_data;
	scan.address = address_data;

	Scan.findOne({ cafe_id: req.params.cafe_id })
		.then(scan => {
			console.log(scan);
			res.status(200).json({scan: scan, length: scan.length});
		})
		// .then(scan => {
		// 	console.log(scan.length);
		// 	res.status(200).json(scans.length);
		// })
	// Scan.findOneAndUpdate(
	// 	{ cafe_id: req.query.cafe_id },
	// 	{
	// 		$inc: { "count" : 1 },
	// 		upsert:true,
	// 		returnNewDocument : true
	// 	}
	// );

	scan.save()
		.then(scan => {
			res.status(302).json(scan)
		});
};
