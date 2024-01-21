const {Router} = require('express');
const { addTodo, getTodo, updateTodo, deleteTodo } = require('../Controllers/todoController');
const routes = new Router();

routes.get('/get',getTodo)
routes.post('/add', addTodo);
routes.put('/update/:id', updateTodo)
routes.delete('/delete/:id', deleteTodo)

module.exports = routes;