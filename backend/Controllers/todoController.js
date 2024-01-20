 const TodoModel = require('../Models/Todo')

module.exports.addTodo =
    (req,res) =>{
        const task = req.body.task;
        TodoModel.create({
            task: task
        }).then(result => res.json(result))
        .catch(err => res.json(err))
        }
module.exports.getTodo = (req, res) =>{
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err=> res.json(err))
}
module.exports.deleteTodo = (req, res) =>{
 //   TodoModel.findByIdAndDelete(req.)
}