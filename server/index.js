const server = require('./server')
const envConfig = require('dotenv').config()

if (envConfig.error) throw envConfig.error


if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  const PORT = process.env.PORT || 3000
  server.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('Listening on port', PORT)
  })
} else {
  console.log('You dont have a url configured.')
}
