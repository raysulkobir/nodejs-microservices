const app = require('./src/app')

const port = process.env?.RUNNING_PORT || 5002
app.listen(port, () => {
  console.log('Server is running on ')
})
