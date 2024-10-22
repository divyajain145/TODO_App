const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://divyashah667:divyashantilalshah@cluster0.eht1o.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}