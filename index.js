const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

const port = process.env.PORT || 5000;


const projects = require('./data/projects.json')


app.get('/projects', (req, res) => {
    res.send(projects)
})

app.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    const selectedProject = projects.find(c => c.id === id);
    res.send(selectedProject);
})

app.get('/', (req, res) => {
    res.send('This a server for tauhid hasans portfolio website')
})

app.listen(port, () => {
    console.log('learning platfrom running on', port)
})