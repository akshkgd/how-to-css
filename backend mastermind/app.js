const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))
let todos = []
app.get('/', (req, res)=>{
    res.render('index', {todos: todos})
})
app.get('/about', (req,res)=>{
     res.send('<h1>This is the about page!!</h1>')
})


app.post('/add', (req,res)=>{
   let title = req.body.title;
   todos.push(title);
   res.redirect('/')
})

app.listen(8000, ()=>{
    console.log('Server is running on port 8000');
})