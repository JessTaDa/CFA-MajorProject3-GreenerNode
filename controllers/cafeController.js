const mongoose = require('mongoose');
const Cafe = require('../models/Cafe');

exports.getCafe = (req, res) => {
	Cafe.find()
		.then((cafes) => {
			res.render('index', {
				title: 'Cafes',
				cafes: cafes
			})
		})
};

exports.editCafe = (req, res) => {
	Cafe.findOne({ _id: req.params.id })
		.then(cafe => {
			res.render('editCafe', {cafe: cafe});
		})
}

exports.createCafe = (req, res) => {
	// console.log('reqy.body is:', req.body);
	const data = req.query.cafe_data;
	let cafe = new Cafe();
	cafe.data = data;
	cafe.save()
		.then(() => {
			res.redirect('/')
		})
	}

exports.updateCafe = (req, res) => {
	// console.log('reqy.body:', req.body);
	Cafe.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true // returns new cafe
	})
		.then(cafe => {
			res.redirect('/')
		})
	}
