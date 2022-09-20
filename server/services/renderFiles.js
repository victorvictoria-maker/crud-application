const axios = require("axios");

exports.homeRoute = (req, res) => {
    // making a request to backend - API /api/users
    // axios.get("http://localhost:3000/api/users")
    //https://crud-user-management-app.herokuapp.com/
    axios.get(" https://crud-user-management-app.herokuapp.com/api/users")
    .then(function(response) {
        res.render('index', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    });
};

exports.addUserRoute = (req, res) => {
    res.render('include/add_user');
};

exports.updateUserRoute = (req, res) => {
   // https://crud-user-management-app.herokuapp.com/
    // axios.get("http://localhost:3000/api/users", {params: {id: req.query.id}})
    axios.get("https://crud-user-management-app.herokuapp.com/api/users", {params: {id: req.query.id}})
    .then(function(userdata) {
        // res.render('index', {users: response.data});
        res.render('update_user', {user: userdata.data});
    })
    .catch(err => {
        res.send(err);
    });
    // res.render('update_user');
};
