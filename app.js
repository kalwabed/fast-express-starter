require('cors')()
const path = require('path')
const express = require('express')
const morgan = require('morgan')

const app = express()

// set view engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// set public directory
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Hello' })
})

app.listen(3000, () => {
  console.log('Running on port 3000')
})
