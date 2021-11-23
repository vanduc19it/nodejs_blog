const path = require('path');
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const hbs = handlebars.create({ extname: '.hbs'})
const app = express()
const port = 3000

app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set("views", path.join(__dirname, 'resources/views'))

app.get('/blog/trangchu', (req, res) => {
    res.render('home');
})

app.get('/blog/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
