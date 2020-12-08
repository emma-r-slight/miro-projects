const express = require('express')
require(dotenv).config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).send('server is working')
})

app.listen(port, () => {
  console.log(`server is running at https://localhost:${port}`)
})
