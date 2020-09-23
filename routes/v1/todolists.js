const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const TodoList = require('../../models/todolist');
const authFunc = require('../../functions/auth');

//create new TodoList
router.post('/', authFunc.checkAdminAuthenticated, (req, res) => {
    TodoList.init().then(() => {
        const id = new mongoose.Types.ObjectId();
        const newTodoList = new TodoList({
            _id: id,
            schedule_id: req.body.schedule_id,
            name: req.body.name,
            items: req.body.items
        });
        newTodoList.save(function (err) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                });
            } else {
                mongoose.connection.close();
                res.status(200).send(JSON.stringify({
                    success: true,
                    message: "TodoList is successfuly added!"
                }));
            }
        });
    });
});

//read all TodoLists
router.get('/', (req, res) => {
    TodoList.find({}).exec(function (err, todoLists) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: todoLists
            }));
        }
    });
});

//read all TodoLists by schedule_id
router.get('/', (req, res) => {
    TodoList.find({schedule_id: req.query.schedule_id}).exec(function (err, todoLists) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: todoLists
            }));
        }
    });
});

//read single TodoList by ID
router.get('/:id', (req, res) => {
    TodoList.findById(req.params.id).exec(function (err, todoList) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: todoList
            }));
        }
    });
});

//update single TodoList by ID
router.post('/:id', authFunc.checkAdminAuthenticated, (req, res) => {
    TodoList.init().then(() => {
        TodoList.findById(req.params.id).exec(function (err, response) {
            if (err) return res.status(500).json({
                success: false,
                message: err.message
            });

            response.schedule_id = req.body.schedule_id;
            response.name = req.body.name;
            response.items = req.body.items;
            response.dateUpdated = Date.now();

            response.save(function (err) {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                } else {
                    return res.status(200).json({
                        success: true,
                        message: "TodoList is successfully updated"
                    });
                }
            });
        });
    });
});

//delete single TodoList by ID
router.delete('/:id', authFunc.checkAdminAuthenticated, (req, res) => {
    TodoList.deleteOne({
        _id: req.params.id
    }).exec(function (err, response) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        } else {
            mongoose.connection.close();
            res.status(200).send(JSON.stringify({
                success: true,
                data: req.params.id
            }));
        }
    });
});

module.exports = router;