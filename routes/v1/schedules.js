const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schedule = require('../../models/schedule');
const authFunc = require('../../functions/auth');

//create new Schedule
router.post('/', authFunc.checkAdminAuthenticated, (req, res) => {
    Schedule.init().then(() => {
        const id = new mongoose.Types.ObjectId();
        const newSchedule = new Schedule({
            _id: id,
            name: req.body.name,
            ownerName: req.body.ownerName,
            date: req.body.date,
            notes: req.body.notes
        });
        newSchedule.save(function (err) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            } else {
                mongoose.connection.close();
                res.status(200).send(JSON.stringify({
                    success: true,
                    message: "Schedule is successfuly added!"
                }));
            }
        });
    });
});

//read all Schedules
router.get('/', (req, res) => {
    Schedule.find({}).exec(function (err, Schedules) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: Schedules
            }));
        }
    });
});

//read single Schedule by ID
router.get('/:id', (req, res) => {
    Schedule.findById(req.params.id).exec(function (err, Schedule) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: Schedule
            }));
        }
    });
});

//update single Schedule by ID
router.post('/:id', authFunc.checkAdminAuthenticated, (req, res) => {
    Schedule.init().then(() => {
        Schedule.findById(req.params.id).exec(function (err, response) {
            if (err) return res.status(500).json({
                success: false,
                message: err.message
            });

            if (req.body.name) {
                response.name = req.body.name;
            }
            if (req.body.ownerName) {
                response.ownerName = req.body.ownerName;
            }
            if (req.body.date) {
                response.date = req.body.date;
            }
            if (req.body.notes) {
                response.notes = req.body.notes;
            }
            response.dateUpdated = Date.now();

            response.save(function (err) {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                } else {
                    Schedule.find({}).exec(function (err, schedules) {
                        if (err) {
                            return res.status(500).json({
                                success: false,
                                message: err.message
                            });
                        } else {
                            mongoose.connection.close();
                            res.status(200).send(JSON.stringify({
                                success: true,
                                data: schedules
                            }));
                        }
                    });
                }
            });
        });
    });
});

//delete single Schedule by ID
router.delete('/:id', authFunc.checkAdminAuthenticated, (req, res) => {
    Schedule.deleteOne({
        _id: req.params.id
    }).exec(function (err, response) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            Schedule.find({}).exec(function (err, schedules) {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                } else {
                    //mongoose.connection.close();
                    res.status(200).send(JSON.stringify({
                        success: true,
                        data: schedules
                    }));
                }
            });
        }
    });
});

module.exports = router;