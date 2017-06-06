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
// 	const name_data = req.query.name;
// 	const address_data = req.query.address;
//
// 	let scan = new Scan();
// 	scan.v = v_data;
// 	scan.name= name_data;
// 	scan.address = address_data;
// 	scan.save()
// 		.then(() => {
// 			res.redirect('/')
// 		})
// 	}

exports.createScan = (req, res) => {
	const v_data = req.query.v;
	const name_data = req.query.name;
	const address_data = req.query.address;

	let scan = new Scan();
	scan.v = v_data;
	scan.name= name_data;
	scan.address = address_data;

	Scan.findOneAndUpdate(
		{ name: req.query.name },
		{
			$inc: { "count" : 1 },
			upsert:true,
			returnNewDocument : true
		}
	);

	scan.save()
		.then(() => {
			res.redirect('/')
		});
};
