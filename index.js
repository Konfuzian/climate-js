const PORT = 8000
const express = require('express')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res) => (res.json('Welcome')))

app.get('/news', (req, res) => {

})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
