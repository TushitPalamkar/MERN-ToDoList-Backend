const ToDoModel = require('../models/ToDoModels');

module.exports.getToDo = async (req, res) => {
    try {
        const todo = await ToDoModel.find();
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const todo = await ToDoModel.create({ text });
        console.log('Added Successfully');
        res.send(todo);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports.updateToDo = async (req, res) => {
    try {
        const { _id, text } = req.body;
        const todo = await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
        res.send('Updated successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports.deleteToDo = async (req, res) => {
    try {
        const { _id } = req.body;
        const todo = await ToDoModel.findByIdAndDelete(_id);
        res.send('Deleted successfully');
    } catch (error) {
        res.status(500).send(error);
    }
};
