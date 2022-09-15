const express = require('express');
const route = express.Router();

const services = require('../services/renderFiles');
const controller = require('../controller/controller');

route.get('/', services.homeRoute);

route.get('/add-user', services.addUserRoute);

route.get('/update_user', services.updateUserRoute);

// api route
route.post('/api/users', controller.create);

route.get('/api/users', controller.find);

route.put('/api/users/:id', controller.update);

route.delete('/api/users/:id', controller.delete);



module.exports = route;