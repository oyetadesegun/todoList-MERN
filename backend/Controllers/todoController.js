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
module.exports.updateTodo = (req, res) => {
    const { id } = req.params;

    TodoModel.findById(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' });
            }
            // Toggle the 'done' field
            todo.done = !todo.done;
            todo.save()
                .then(updatedTodo => res.json(updatedTodo))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
};

module.exports.deleteTodo = (req, res) =>{
    const {id} = req.params;
  TodoModel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
}