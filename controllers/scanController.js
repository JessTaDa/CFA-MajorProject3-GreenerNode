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
// 	const cafeid_data = req.query.cafeid;
// 	const address_data = req.query.address;
//
// 	let scan = new Scan();
// 	scan.v = v_data;
// 	scan.cafeid= cafeid_data;
// 	scan.address = address_data;
// 	scan.save()
// 		.then(() => {
// 			res.redirect('/')
// 		})
// 	}

exports.createScan = (req, res) => {
	console.log(req.query);
	const version_data = req.query.version;
	const cafeid_data = req.query.cafeid;
	const address_data = req.query.address;

	let scan = new Scan();
	scan.version = version_data;
	scan.cafeid= cafeid_data;
	scan.address = address_data;

	Scan.findOne({ cafeid: req.params.cafeid })
		.then(scan => {
			console.log(scan);
			res.status(200).json({scan: scan, length: scan.length});
		})

	// Scan.findOneAndUpdate(
	// 	{ cafeid: req.query.cafeid },
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

exports.createScan_api = (req, res) => {
	console.log(req.query);
	const version_data = req.query.version;
	const cafeid_data = req.query.cafeid;
	const address_data = req.query.address;

	let scan = new Scan();
	scan.version = version_data;
	scan.cafeid= cafeid_data;
	scan.address = address_data;

	Scan.findOne({ cafeid: req.params.cafeid })
		.then(scan => {
			console.log(scan);
			res.status(200).json({scan: scan, length: scan.length});
		})

	scan.save()
		.then(scan => {
			res.status(302).json(scan)
		});
};
