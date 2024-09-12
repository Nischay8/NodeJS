/* eslint-disable node/no-unsupported-features/es-syntax */
const Tour = require('../models/TourModel');

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'Success',
      data: {
        tour: newTour
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    const allTours = await Tour.find({});
    res.status(200).json({
      status: 'Success',
      data: allTours
    });
  } catch (error) {
    res.status(404).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'Success',
      data: tour
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: 'Success',
      data: {
        tour: updatedTour
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    });
  }
};
