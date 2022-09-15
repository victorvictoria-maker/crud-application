let userSchema = require('../model/model');
// const mongoose = require('mongoose');

// you create api in the controller
// create new user and save
exports.create = (req, res) => {
    // validate request
    if(!req.body) {
        res
            .status(400)
            .send({
                message: "User information cannot be empty"
            });
        return;
    };

    // create new user
    const user = new userSchema({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });

    // save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while creating user"
            });
        });
};


// retrieve and return all users or a user
exports.find = (req, res) => {
    if(req.query.id) {
        const id = req.query.id;

        userSchema.findById(id)
        .then(users => {
            if (!users) {
                res
                .status(404)
                .send({ message: `Not find user with id ${id}`});
            } else {
                res.send(users);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error retrieving user with id ${id}`
            });
        });
    } else {
        userSchema.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred while getting user information from database"
            });
        });
    };
};

// update a new identified user by user id
exports.update = (req, res) => {
    if(!req.body) {
        res
            .status(400)
            .send({
                message: "Data to update cannot be empty"
            });
        return;
    };

    const id = req.params.id;
    // var _id = mongoose.Types.ObjectId.fromString(id);
    userSchema.findByIdAndUpdate(id, req.body, {useFindAndModified: false})
    .then(data => {
        if(!data) {
            res
                .status(404)
                .send({
                    message: `Cannot update user with ${id}, Maybe user not found`
                });
        } else {
            res.send(data);
        };
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error while updating user"
        });
    });


};

// delete user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;

    userSchema.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res
                .status(404)
                .send({
                    message: `Cannot delete with ${id}, Maybe id is wrong`
                });
        } else {
            res.send({
                message: "User was deleted successfully!"
            });
        };
    })
    .catch(err => {
        res.status(500).send({
            message: "Cannot delete user with id:" +id
        });
    });;
};