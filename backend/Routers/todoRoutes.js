const {Router} = require('express');
const { addTodo, getTodo } = require('../Controllers/todoController');
const routes = new Router();


routes.get('/get',getTodo)
routes.post('/add', addTodo);



module.exports = routes;