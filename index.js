const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))
app.get('/blog/trangchu', (req, res) => {
  res.send(
    `<h1>heloưold</h1>`
  )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})