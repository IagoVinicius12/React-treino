
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());


let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    newTask.id = tasks.length + 1; 
    tasks.push(newTask);
    res.json({ message: 'Task added successfully', task: newTask });
});

app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const taskId = parseInt(id, 10);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json(tasks);
  });  

// Inicialização do servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
