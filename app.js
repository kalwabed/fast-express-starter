const path = require('path')
const express = require('express')
const eta = require('eta')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

// set view engine
app.engine('eta', eta.renderFile)
app.set('view engine', 'eta')
app.set('views', path.join(__dirname, './views'))

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set public directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello', name: '' })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
